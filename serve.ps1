# Simple static file server for local testing (PowerShell)
# Usage: Right-click -> "Run with PowerShell" or run in PowerShell:
#   cd 'C:\EXAMPLE\gwakavilla_refactored_website'; .\serve.ps1
# This server listens on http://localhost:8000/ and serves files from the current directory.

$prefix = 'http://localhost:3000/'
$root = Get-Location

$mime = @{
    '.html' = 'text/html'
    '.htm'  = 'text/html'
    '.css'  = 'text/css'
    '.js'   = 'application/javascript'
    '.json' = 'application/json'
    '.png'  = 'image/png'
    '.jpg'  = 'image/jpeg'
    '.jpeg' = 'image/jpeg'
    '.gif'  = 'image/gif'
    '.svg'  = 'image/svg+xml'
    '.webp' = 'image/webp'
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)
try {
    $listener.Start()
} catch {
    Write-Error "Failed to start listener on $prefix. Try running PowerShell as Administrator or use the LOCAL_TESTING.md alternatives.`nError: $_"
    exit 1
}

Write-Host "Serving $($root) at $prefix -- press Ctrl+C to stop"

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $req = $context.Request
    $res = $context.Response

    $localPath = $req.Url.LocalPath.TrimStart('/')
    if ([string]::IsNullOrEmpty($localPath)) { $localPath = 'index.html' }

    $filePath = Join-Path $root $localPath
    if (Test-Path $filePath) {
        try {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            if ($mime.ContainsKey($ext)) { $res.ContentType = $mime[$ext] } else { $res.ContentType = 'application/octet-stream' }
            $res.ContentLength64 = $bytes.Length
            $res.StatusCode = 200
            $res.OutputStream.Write($bytes, 0, $bytes.Length)
        } catch {
            $msg = "500 Internal Server Error: $_"
            $buf = [System.Text.Encoding]::UTF8.GetBytes($msg)
            $res.StatusCode = 500
            $res.ContentType = 'text/plain'
            $res.ContentLength64 = $buf.Length
            $res.OutputStream.Write($buf,0,$buf.Length)
        }
    } else {
        $resp = '404 Not Found'
        $buf = [System.Text.Encoding]::UTF8.GetBytes($resp)
        $res.StatusCode = 404
        $res.ContentType = 'text/plain'
        $res.ContentLength64 = $buf.Length
        $res.OutputStream.Write($buf,0,$buf.Length)
    }
    $res.OutputStream.Close()
}

$listener.Stop()
$listener.Close()
