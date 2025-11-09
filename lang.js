(() => {
  const translations = {
    en: {
      nav_home: 'Home',
      nav_about: 'About',
      nav_services: 'Services',
      nav_products: 'Products',   
      nav_contact: 'Contact',
      hero_h1: 'Your Vision, Printed to Perfection',
      hero_p: 'High-quality digital printing solutions for your business and personal needs.',
      hero_btn: 'Explore Services',
  about_h1: 'About Gwakavilla Digital Printing',
  about_p: 'Learn about our mission, vision, and commitment to quality.',
  about_btn: 'Our Story',
  about_journey_h2: 'Our Journey to Excellence',
  about_quality_h3: 'Committed to Quality and Speed',
  about_quality_p: 'Founded in 2023, Gwakavilla Digital Printing started with a single mission: to provide the highest quality printing services with unmatched turnaround times. Over the years, we have grown into a leading print house in KATAVI-Mpanda, trusted by both large corporations and small businesses.',
  about_values_h3: 'Our Core Values',
  about_values_p: 'We believe in Integrity, Customer Focus, and Innovation. Every project we undertake is handled with precision and care, ensuring that the final product not only meets but exceeds your expectations.',
  about_cta: 'Get a Quote Today',
      footer_brand: 'Gwakavilla Digital Printing',
      services_h2: 'Our Core Services',
  services_h1: 'Professional Printing Services',
  services_p: 'High-quality solutions to meet all your printing, design, and branding needs.',
  services_btn: 'View Our Services',
  services_full_h2: 'Our Complete Range of Services',
  services_full_p: 'We combine cutting-edge technology with creative expertise to deliver exceptional results.',
  svc_digital_title: 'Digital Printing',
  svc_digital_desc: 'Ideal for smaller runs, fast turnaround, and personalized documents like flyers, brochures, and reports.',
  svc_large_title: 'Large Format Printing',
  svc_large_desc: 'For big impact! Perfect for roll-up banners, outdoor posters, shop signs, and backdrops.',
  svc_design_title: 'Graphic Design',
  svc_design_desc: 'Let our professional designers create stunning visuals for your brand, ensuring your message is clear and engaging.',
  svc_apparel_title: 'Apparel Printing',
  svc_apparel_desc: 'Custom T-shirt printing, uniform branding, and cap embroidery using various quality techniques.',
  svc_finishing_title: 'Finishing & Binding',
  svc_finishing_desc: 'Professional finishing services including lamination, binding, cutting, folding, and packaging.',
  svc_promotional_title: 'Promotional Items',
  svc_promotional_desc: 'Branding on mugs, pens, keychains, and other corporate giveaways to boost your marketing efforts.',
  service_digital_title: 'Digital Printing',
  service_digital_desc: 'Fast turnaround for flyers, brochures, and custom documents.',
  service_design_title: 'Graphic Design',
  service_design_desc: 'Professional design services to make your materials stand out.',
  service_large_title: 'Large Format',
  service_large_desc: 'Banners, posters, and signage for maximum impact.',
        service_packaging_title: 'Packaging Design',
        service_packaging_desc: 'Creative packaging design that protects your product and strengthens brand identity.',
        service_vehicle_title: 'Vehicle Branding',
        service_vehicle_desc: 'Full and partial vehicle wraps to turn your fleet into moving billboards.',
        service_apparel_title: 'Promotional Apparel',
        service_apparel_desc: 'Custom t-shirts, uniforms and apparel for events, staff, and giveaways.',
        service_photo_title: 'Photo Printing',
        service_photo_desc: 'High-quality photo printing, enlargements and fine art prints.',
      services_view: 'View All Services',
      products_h2: 'Our Products',
  products_view: 'View All Products',
  products_p: 'Explore our range of high-quality printing products',
  product_business_cards_title: 'Business Cards',
  product_business_cards_desc: 'Premium quality business cards that make a lasting impression.',
  product_rollup_title: 'Roll-up Banners',
  product_rollup_desc: 'Portable and durable solutions for exhibitions and events.',
  product_flyers_title: 'Flyers & Brochures',
  product_flyers_desc: 'Eye-catching marketing materials for your business.',
  product_mugs_title: 'Custom Mugs',
  product_mugs_desc: 'Personalized mugs perfect for gifts or corporate branding.',
  product_tshirt_title: 'T-Shirt Printing',
  product_tshirt_desc: 'High-quality apparel printing for events or uniforms.',
  product_awards_title: 'Awards & Trophies',
  product_awards_desc: 'Custom awards to recognize achievements and milestones.',
  product_id_title: 'Identification Cards',
  product_id_desc: 'Professional ID card printing for businesses and institutions.',
  product_certificates_title: 'Certificates',
  product_certificates_desc: 'High-quality printed certificates and diplomas.',
  logo_alt: 'Gwakavilla Logo',
  hero_img_1: 'Printing machinery in action',
  hero_img_2: 'Roller banners on display',
  hero_img_3: 'Branding materials and samples',
  prod_card1_alt: 'Stack of business cards',
  prod_rollup1_alt: 'Roll-up banner example',
  prod_brochure_alt: 'Printed brochures and flyers',
  prod_mugs2_alt: 'Custom branded mugs',
  prod_tshirt1_alt: 'Printed T-shirt sample',
  prod_award1_alt: 'Award trophy sample',
  prod_id1_alt: 'Sample identification cards',
  prod_document1_alt: 'Printed certificate sample',
  product_business_cards_title: 'Business Cards',
  product_business_cards_desc: 'Premium quality business cards that make a lasting impression.',
  product_rollup_title: 'Roll-up Banners',
  product_rollup_desc: 'Portable and durable solutions for exhibitions and events.',
  product_flyers_title: 'Flyers & Brochures',
  product_flyers_desc: 'Eye-catching marketing materials for your business.',
  product_mugs_title: 'Custom Mugs',
  product_mugs_desc: 'Personalized mugs perfect for gifts or corporate branding.',
  product_tshirt_title: 'T-Shirt Printing',
  product_tshirt_desc: 'High-quality apparel printing for events or uniforms.',
  product_awards_title: 'Awards & Trophies',
  product_awards_desc: 'Custom awards to recognize achievements and milestones.',
  product_id_title: 'Identification Cards',
  product_id_desc: 'Professional ID card printing for businesses and institutions.',
  product_certificates_title: 'Certificates',
  product_certificates_desc: 'High-quality printed certificates and diplomas.',
  product_posters_title: 'Posters & Banners',
  product_posters_desc: 'Large format prints for advertising and displays.',
    product_stickers_title: 'Stickers & Labels',
    product_stickers_desc: 'Custom stickers and labels for packaging, branding, and promotions.',
    product_calendars_title: 'Calendars',
    product_calendars_desc: 'Personalized and corporate calendars for year-round visibility.',
    product_gifts_title: 'Corporate Gifts',
    product_gifts_desc: 'Branded corporate gifts and promotional items to delight clients and staff.',
    product_signage_title: 'Signage Making',
    product_signage_desc: 'Custom signage solutions for businesses, including outdoor and indoor signs for branding and visibility.',
      contact_h1: 'Contact Us',
      contact_btn: 'Send a Message',
      contact_getin_h2: 'Get in Touch',
      form_name_label: 'Your Name',
      form_email_label: 'Your Email',
      form_subject_label: 'Subject',
      form_message_label: 'Message',
      form_submit: 'Send Message',
      contact_reach_h3: 'Reach Us Directly',
      contact_phone: '+255 629 059 965',
      contact_phone2: '+255 769 696 118',
      contact_phone3: '+255 787 591 700',
      contact_email: 'info@gwakavilla.com',
      contact_hours: 'Mon - Fri: 8:00 AM - 5:00 PM',
      footer_quicklinks: 'Quick Links',
      footer_popular: 'Popular Services',
      footer_contactinfo: 'Contact Info',
      footer_desc: 'Your trusted partner for all digital and large format printing needs. Quality, speed, and precision guaranteed.',
      copyright: '© 2023 Gwakavilla Digital Printing. All rights reserved.',
      services_h2: 'Our Core Services',
      services_p: 'We fulfill your ideas with speed, quality, and precision.',
      services_view: 'View All Services',
      service_digital_title: 'Digital Printing',
      service_digital_desc: 'Fast printing of flyers, brochures, calendars, wedding materials, certificates, product labels, and photocopies.',
      service_design_title: 'Graphic Design',
      service_design_desc: 'Professional creative services to make your products unique.',
      service_large_title: 'Large Format',
      service_large_desc: 'Banners, posters, and signage for the best results.',
      service_embroidery_title: 'Embroidery Machine',
      service_embroidery_desc: 'Embroidery on T-shirts, caps, and printing of other clothes.',
      service_cnc_title: 'CNC Engraving',
      service_cnc_desc: 'Engraving services for custom designs on various materials.',
      service_signage_title: 'Signage Making',
      service_signage_desc: 'Indoor signs, door signs, outdoor signs, 3D signs, and pylons.',
      service_welding_title: 'Welding',
      service_welding_desc: 'Custom metal fabrication and welding for signage and structures.',
      service_branding_title: 'Branding Services',
      service_branding_desc: 'Vehicle wrapping, indoor and outdoor office branding.',
      about_stats_h2: 'About Us',
      about_summary: 'Gwakavilla Digital Printing provides high-quality printing services in KATAVI-Mpanda, trusted by businesses large and small.',
      stat_clients: 'Happy Clients',
      stat_projects: 'Projects Completed',
      stat_years: 'Years in Business'
    },
    sw: {
      nav_home: 'Nyumbani',
      nav_about: 'Kuhusu',
      nav_services: 'Huduma',
      nav_products: 'Bidhaa',
      nav_contact: 'Mawasiliano',
      hero_h1: 'Huduma bora, Zenye mwonekano mzuri',
      hero_p: 'Huduma za uchapishaji wa dijitali zenye ubora kwa biashara na matumizi binafsi.',
      hero_btn: 'Fahamu huduma zetu',
  about_h1: 'Kuhusu Gwakavilla Uchapaji Dijitali',
  about_p: 'Jifunze kuhusu dhamira yetu, maono, na dhamira yetu kwa ubora.',
  about_btn: 'Hadithi Yetu',
  about_journey_h2: 'Safari Yetu ya Ustadi',
  about_quality_h3: 'Tayari kwa Ubora na Kasi',
  about_quality_p: 'Gwakavilla Uchapaji Dijitali ilianzishwa kwa dhamira moja: kutoa huduma za uchapishaji za ubora wa juu kwa muda mfipi. Mwaka hadi mwaka tumekua kuwa kituo kinachoaminika cha uchapishaji KATAVI-Mpanda, tukihudumia makampuni makubwa na biashara ndogo.',
  about_values_h3: 'Maadili Yetu ya Msingi',
  about_values_p: 'Tunaamini katika Uadilifu, Kuweka Mteja Kitu Kati, na Ubunifu. Kila mradi tunaufanyia unafanyiwa kwa usahihi na uangalifu, kuhakikisha kuwa matokeo ya mwisho hayakidhi tu bali yanazidi matarajio yako.',
  about_cta: 'Pata Nukuu Sasa',
      footer_brand: 'Gwakavilla Uchapaji Dijitali',
      services_h2: 'Huduma Zetu za Msingi',
  services_h1: 'Huduma za Uchapishaji za Kitaalamu',
  services_p: 'Ufumbuzi wa ubora wa juu kukidhi mahitaji yako yote ya uchapishaji, muundo, na uendelezaji.',
  services_btn: 'Tazama Huduma Zetu',
        service_packaging_title: 'Ubunifu wa Ufungashaji',
        service_packaging_desc: 'Ubunifu wa ufungashaji wa ubunifu unaolinda bidhaa yako na kuimarisha utambulisho wa chapa.',
        service_vehicle_title: 'Uwekaji Chapa kwenye Gari',
        service_vehicle_desc: 'Wraps za magari kamili na za sehemu ili kugeuza magari kuwa matangazo yanayoonekana kusogea.',
        service_apparel_title: 'Nguo za Uendelezaji',
        service_apparel_desc: 'Fulana za kawaida, sare na nguo kwa matukio, wafanyakazi, na zawadi.',
        service_photo_title: 'Uchapishaji wa Picha',
        service_photo_desc: 'Uchapishaji wa picha za ubora wa juu, ukubwa mkubwa na prints za sanaa.',
      services_view: 'Angalia Huduma Zote',
      services_full_h2: 'Huduma Zetu Zote',
      services_full_p: 'Tunachanganya teknolojia ya kisasa na ujuzi wa ubunifu ili kutoa matokeo ya kipekee.',
      svc_digital_title: 'Uchapishaji wa Dijitali',
      svc_digital_desc: 'Inafaa kwa uzalishaji mdogo, utoaji wa haraka, na hati zilizobinafsishwa kama fliers, brosha, na ripoti.',
      svc_large_title: 'Uchapishaji wa Ukubwa Mkubwa',
      svc_large_desc: 'Kwa athari kubwa! Inafaa kwa bannera za roll-up, posti za nje, mabango ya maduka, na nyuso za nyuma.',
      svc_design_title: 'Ubunifu wa Picha',
      svc_design_desc: 'Wataalamu wetu wa ubunifu wataunda picha za kuvutia kwa chapa yako, kuhakikisha ujumbe wako ni wazi na wa kuvutia.',
      svc_apparel_title: 'Uchapishaji wa Nguo',
      svc_apparel_desc: 'Uchapishaji wa fulana za kawaida, uwekaji chapa kwenye sare, na uchoraji wa kofia kwa kutumia mbinu mbalimbali za ubora.',
      svc_finishing_title: 'Ukomeshaji & Kufunga',
      svc_finishing_desc: 'Huduma za ukomeshaji za kitaalamu ikiwemo lamination, kufunga, kukata, kunanua, na ufungaji.',
      svc_promotional_title: 'Vitu vya Uendelezaji',
      svc_promotional_desc: 'Uwekaji chapa kwenye vikombe, kalamu, funguo na zawadi nyingine za kampuni ili kuongeza juhudi zako za masoko.',
      products_h2: 'Bidhaa Zetu',
      products_view: 'Angalia Bidhaa Zote',
  products_p: 'Gundua aina zetu za bidhaa za uchapishaji za ubora wa juu',
  product_business_cards_title: 'Kadi za Biashara',
  product_business_cards_desc: 'Kadi za biashara za ubora wa juu zinazobakia mfadhaiko wa kuonekana.',
  product_rollup_title: 'Bannera za Roll-up',
  product_rollup_desc: 'Suluhisho linalobebeka na sugu kwa maonyesho na matukio.',
  product_flyers_title: 'Vyeti & Brosha',
  product_flyers_desc: 'Nyenzo za masoko zinazovutia kwa biashara yako.',
  product_mugs_title: 'Kombe za Kifani',
  product_mugs_desc: 'Kombe za kibinafsi zinazoafaa kwa zawadi au uchoraji wa kampuni.',
  product_tshirt_title: 'Uchapishaji wa Fulana',
  product_tshirt_desc: 'Uchapishaji wa nguo za ubora wa juu kwa matukio au sare.',
  product_awards_title: 'Tuzo na Vito',
  product_awards_desc: 'Tuzo za kawaida kutambua mafanikio na mafanikio.',
  product_id_title: 'Kadi za Utambulisho',
  product_id_desc: 'Uchapishaji wa kadi za utambulisho za kitaalam kwa biashara na taasisi.',
  product_certificates_title: 'Vyeti',
  product_certificates_desc: 'Vyeti na diploma zilizochapishwa kwa ubora wa juu.',
  logo_alt: 'Nembo ya Gwakavilla',
  hero_img_1: 'Mashine za uchapishaji zikiendesha',
  hero_img_2: 'Bannera za roll-up zinazoonyeshwa',
  hero_img_3: 'Vifaa na sampuli za uendelezaji',
  prod_card1_alt: 'Kadi za biashara zilizopachikwa',
  prod_rollup1_alt: 'Mfano wa banner ya roll-up',
  prod_brochure_alt: 'Brosha na fliers zilizochapishwa',
  prod_mugs2_alt: 'Kombe zilizo na chapa ya kampuni',
  prod_tshirt1_alt: 'Mfano wa fulana iliyochapishwa',
  prod_award1_alt: 'Mfano wa kombe la tuzo',
  prod_id1_alt: 'Mifano ya kadi za utambulisho',
  prod_document1_alt: 'Mfano wa cheti kilichochapishwa',
  product_business_cards_title: 'Kadi za Biashara',
  product_business_cards_desc: 'Kadi za biashara za ubora wa juu zinazobakia mfadhaiko wa kuonekana.',
  product_rollup_title: 'Bannera za Roll-up',
  product_rollup_desc: 'Suluhisho linalobebeka na sugu kwa maonyesho na matukio.',
  product_flyers_title: 'Vyeti & Brosha',
  product_flyers_desc: 'Nyenzo za masoko zinazovutia kwa biashara yako.',
  product_mugs_title: 'Kombe za Kifani',
  product_mugs_desc: 'Kombe za kibinafsi zinazoafaa kwa zawadi au uchoraji wa kampuni.',
  product_tshirt_title: 'Uchapishaji wa Fulana',
  product_tshirt_desc: 'Uchapishaji wa nguo za ubora wa juu kwa matukio au sare.',
  product_awards_title: 'Tuzo na Vito',
  product_awards_desc: 'Tuzo za kawaida kutambua mafanikio na mafanikio.',
  product_id_title: 'Kadi za Utambulisho',
  product_id_desc: 'Uchapishaji wa kadi za utambulisho za kitaalam kwa biashara na taasisi.',
  product_certificates_title: 'Vyeti',
  product_certificates_desc: 'Vyeti na diploma zilizochapishwa kwa ubora wa juu.',
  product_posters_title: 'Posta & Bannera',
  product_posters_desc: 'Chapisho za ukubwa mkubwa kwa matangazo na maonyesho.',
    product_stickers_title: 'Stika & Lebo',
    product_stickers_desc: 'Stika na lebo za kawaida kwa ufungaji, uendelezaji na masoko.',
    product_calendars_title: 'Kalenda',
    product_calendars_desc: 'Kalenda za kibinafsi na za shirika kwa mwonekano wa mwaka mzima.',
    product_gifts_title: 'Zawadi za Kampuni',
    product_gifts_desc: 'Zawadi za kampuni zilizo na chapa na vitu vya uendelezaji kuwafurahisha wateja na wafanyakazi.',
    product_signage_title: 'Utengenezaji wa Bango/Alama',
    product_signage_desc: 'Suluhisho za alama za kawaida kwa biashara, ikiwemo alama za nje na ndani kwa uendelezaji na mwonekano.',
      contact_h1: 'Wasiliana Nasi',
      contact_btn: 'Tuma Ujumbe',
      contact_getin_h2: 'Wasiliana Nasi',
      form_name_label: 'Jina Lako',
      form_email_label: 'Barua Pepe Yako',
      form_subject_label: 'Kichwa',
      form_message_label: 'Ujumbe',
      form_submit: 'Tuma Ujumbe',
      contact_reach_h3: 'Wasiliana Nasi Moja kwa Moja',
      contact_phone: '+255 629 059 965',
      contact_phone2: '+255 769 696 118',
      contact_phone3: '+255 787 591 700',
      contact_hours: 'Jumatatu - Ijumaa: 8:00 AM - 5:00 PM',
      footer_quicklinks: 'Viungo vya Haraka',
      footer_popular: 'Huduma Maarufu',
      footer_contactinfo: 'Taarifa za Mawasiliano',
      footer_desc: 'Mshirika wako anayeaminika kwa huduma zote za uchapishaji wa dijitali na ukubwa mkubwa. Ubora, kasi, na usahihi vinahakikishwa.',
      copyright: '© 2023 Gwakavilla Digital Printing. Haki zote zimehifadhiwa.',
      services_h2: 'Huduma Zetu Kuu',
      services_p: 'Tunatimiza mawazo yako kwa kasi, ubora na usahihi.',
      services_view: 'Angalia Huduma Zote',
      
      service_digital_title: 'Uchapaji wa Kidijitali',
      service_digital_desc: 'Uchapishaji wa haraka wa vipeperushi (flyers), vijitabu (brochures), kalenda, Harusi, vyeti, kadi za lebo za bidhaa na fotokopi.',
      
      service_design_title: 'Ubunifu wa Picha (Graphic Design)',
      service_design_desc: 'Huduma za ubunifu wa kitaalamu ili kufanya bidhaa zako ziwe za kipekee.',
      
      service_large_title: 'Fomati Kubwa',
      service_large_desc: 'Mabango, picha za matangazo (posters), na alama za matangazo (signage) kwa matokeo mazuri zaidi.',
      
      service_embroidery_title: 'Mashine ya Kudarizi',
      service_embroidery_desc: 'Udarizi wa T-shirt, kofia (cape) na uchapishaji wa nguo zingine.',
      
      service_cnc_title: 'Uchongaji wa CNC (Engraving)',
      service_cnc_desc: 'Huduma za uchongaji kwa miundo ya kawaida kwenye nyenzo mbalimbali.',
      
      service_signage_title: 'Utengenezaji wa Bango/Alama',
      service_signage_desc: 'Alama za ndani, za Mlango, za Nje, Alama za 3D na nguzo (pylons).',
      
      service_welding_title: 'Uchomeleaji (Welding)',
      service_welding_desc: 'Uchomeleaji wa chuma na uundaji wa miundo ya alama na miundo.',
      
      service_branding_title: 'Huduma za Uwekaji Chapa',
      service_branding_desc: 'Uwekaji Chapa Kwenye Magari, Chapa za ndani na nje ya Ofisi',
      about_stats_h2: 'Kuhusu Sisi',
      about_summary: 'Gwakavilla Digital Printing hutoa huduma za uchapishaji za ubora wa juu huko KATAVI-Mpanda, zikiwa zinaaminika na biashara kubwa na ndogo.',
      stat_clients: 'Wateja Wenye Furaha',
      stat_projects: 'Miradi Iliyokamilika',
      stat_years: 'Miaka katika Biashara'
    }
  };

  function applyLang(lang) {
    document.querySelectorAll('[data-lang]').forEach(el => {
      const key = el.getAttribute('data-lang');
      if (!key) return;
      const text = translations[lang] && translations[lang][key];
      if (text !== undefined) {
        // Preserve HTML for nodes that may contain children other than text
        if (el.tagName.toLowerCase() === 'a' || el.tagName.toLowerCase() === 'button' || el.tagName.toLowerCase() === 'h1' || el.tagName.toLowerCase() === 'h2' || el.tagName.toLowerCase() === 'p') {
          el.textContent = text;
        } else {
          el.textContent = text;
        }
      }
    });
    // Apply alt texts for images with data-lang-alt
    document.querySelectorAll('[data-lang-alt]').forEach(img => {
      const altKey = img.getAttribute('data-lang-alt');
      if (!altKey) return;
      const altText = translations[lang] && translations[lang][altKey];
      if (altText !== undefined) img.alt = altText;
    });
    const sel = document.getElementById('lang-select');
    if (sel) sel.value = lang;
    // set document language for accessibility
    try { document.documentElement.lang = lang; } catch (e) { /* ignore */ }

    // Update visual indicator (flag + short label)
    const indicator = document.getElementById('lang-indicator');
    const switchWrap = document.getElementById('lang-switch');
    if (indicator) {
      if (lang === 'sw') {
        indicator.querySelector('.flag').textContent = '🇹🇿';
        indicator.querySelector('.label').textContent = 'SW';
      } else {
        indicator.querySelector('.flag').textContent = '🇬🇧';
        indicator.querySelector('.label').textContent = 'EN';
      }
    }
    if (switchWrap) {
      // keep active so the indicator remains visually persistent
      switchWrap.classList.add('active');
    }

    // Dispatch custom event for language change to trigger re-animations
    window.dispatchEvent(new CustomEvent('languageChanged'));
  }

  document.addEventListener('DOMContentLoaded', () => {
    const stored = localStorage.getItem('gw_lang') || 'en';
    applyLang(stored);
    const sel = document.getElementById('lang-select');
    if (sel) {
      sel.value = stored;
      sel.addEventListener('change', (e) => {
        const v = e.target.value;
        localStorage.setItem('gw_lang', v);
        applyLang(v);
      });
    }
  });
})();
