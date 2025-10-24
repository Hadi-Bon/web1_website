// main.js
document.addEventListener('DOMContentLoaded', function () {

  // Navbar scroll effect
  const nav = document.getElementById('mainNav');
  const threshold = 80;
  function checkScroll(){
    if(window.scrollY > threshold){
      nav.classList.add('scrolled');
      document.documentElement.style.setProperty('color-scheme','dark');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  checkScroll();
  window.addEventListener('scroll', checkScroll);

  // Language toggle: يبدل بين العربية والانجليزية
  const flags = document.querySelectorAll('.flag-btn');
  const root = document.documentElement;
  // key texts to translate (add more as required)
  const translations = {
    'ar': {
      'title': 'بوابة فعالية دمشق',
      'sub': 'المنصة التي تجمع المبادرات والفعاليات الإنسانية في مكان واحد. شارك، تبرع، وكن جزءًا من صناعة الأثر في مجتمعك.',
      'btn': 'دمشق تحتاجك',
      'home': 'الرئيسية',
      'events': 'الفعاليات', 
      'about': 'عن الدليل', // ✅ نص مباشر بدلاً من كائن
      'contact': 'اتصل بنا',
      'featured': 'أبرز الفعاليات',
      'discover': 'اكتشف الفعالية',
'eventsData': {
  'bazaar': {
    title: 'بازار دمشق للأمل',
    desc: 'معرض خيري لمنتجات حرفية وبيتية لدعم العائلات المتضررة.'
  },
  'trees': {
    title: 'إعادة تشجير الغوطة',
    desc: 'يوم تطوعي لزراعة الأشجار في المناطق المتضررة.'
  },
  'children': {
    title: 'مهرجان الأطفال للسلام',
    desc: 'نشاط ترفيهي وتعليمي للأطفال مع ألعاب ومسابقات رسم.'
  },
  'schools': {
    title: 'يوم تطوعي لترميم المدارس',
    desc: 'طلاب الجامعات يشاركون بإصلاح المقاعد والدهان في مدارس دمشق.'
  },
  'ramadan': {
    title: 'سوق رمضان الخيري',
    desc: 'بازار في باب توما لدعم الأسر قبيل العيد.'
  },
  'photos': {
    title: 'معرض صور دمشق تنهض',
    desc: 'صور فوتوغرافية قبل وبعد التحرير تُعرض في ساحة عامة.'
  },
  'books': {
    title: 'حملة كتاب لكل بيت',
    desc: 'توزيع كتب مستعملة وجديدة لدعم الثقافة في المجتمع.'
  },
  'universities': {
    title: 'اليوم المفتوح للجامعات',
    desc: 'استقبال الأهالي والطلاب الجدد لتعريفهم بفرص التعليم.'
  },
  'food': {
    title: 'مهرجان الطعام الدمشقي',
    desc: 'تذوق أكلات شعبية تقليدية مع عروض فلكلورية.'
  },
  'clean': {
    title: 'مبادرة شارع نظيف',
    desc: 'تنظيف وتجميل أحياء دمشق القديمة بمشاركة الأهالي.'
  },
},
    // ✅ قسم حدث اليوم داخل "ar"
    'today': {
      'title': 'حدث اليوم',
      'badge': 'حدث اليوم',
      'name': 'إعادة تشجير الغوطة',
      'location': 'ريف دمشق – الغوطة الشرقية',
      'date': '13 تشرين الأول 2025',
      'btn': 'تفاصيل الفعالية'
    },




'latest': {
      'title': 'أحدث الفعاليات',
      'searchPlaceholder': 'ابحث عن فعالية...',
      'allTypes': 'كل الأنواع',
      'charity': 'خيري',
      'volunteer': 'تطوعي',
      'cultural': 'ثقافي',
      'environmental': 'بيئي',
      'allDates': 'كل التواريخ',
      'october': 'تشرين الأول 2025',
      'november': 'تشرين الثاني 2025',
      'december': 'كانون الأول 2025',
      'allLocations': 'كل الأماكن',
      'damascus': 'دمشق',
      'rural': 'ريف دمشق',
      'details': 'تفاصيل'
    },
    // ========== بيانات أحدث الفعاليات ==========

// 'latestEventsData': {
//   'bazaar': {
//     title: 'بازار دمشق للأمل',
//     desc: 'معرض خيري لمنتجات حرفية وبيتية لدعم العائلات المتضررة.'
//   },
//   'trees': {
//     title: 'إعادة تشجير الغوطة',
//     desc: 'يوم تطوعي لزراعة الأشجار في المناطق المتضررة.'
//   },
//   'clean': {
//     title: 'مبادرة شارع نظيف',
//     desc: 'تنظيف وتجميل أحياء دمشق القديمة بمشاركة الأهالي.'
//   },
//   'schools': {
//     title: 'يوم تطوعي لترميم المدارس',
//     desc: 'طلاب الجامعات يشاركون بإصلاح المقاعد والدهان في مدارس دمشق.'
//   },
//   'ramadan': {
//     title: 'سوق رمضان الخيري',
//     desc: 'بازار في باب توما لدعم الأسر قبيل العيد.'
//   },
//   'photos': {
//     title: 'معرض صور دمشق تنهض',
//     desc: 'صور فوتوغرافية قبل وبعد التحرير تُعرض في ساحة عامة.'
//   },
//   'books': {
//     title: 'حملة كتاب لكل بيت',
//     desc: 'توزيع كتب مستعملة وجديدة لدعم الثقافة في المجتمع.'
//   },
//   'universities': {
//     title: 'اليوم المفتوح للجامعات',
//     desc: 'استقبال الأهالي والطلاب الجدد لتعريفهم بفرص التعليم.'
//   },
//   'food': {
//     title: 'مهرجان الطعام الدمشقي',
//     desc: 'تذوق أكلات شعبية تقليدية مع عروض فلكلورية.'
//   },
//   'kids': {
//     title: 'مهرجان الأطفال للسلام',
//     desc: 'نشاط ترفيهي وتعليمي للأطفال مع ألعاب ومسابقات رسم.'
//   }
// },

'latestEventsData': {
  'bazaar': {
    title: 'بازار دمشق للأمل',
    desc: 'معرض خيري لمنتجات حرفية وبيتية لدعم العائلات المتضررة.',
    date: '10 تشرين الأول 2025',
    location: 'دمشق'
  },
  'trees': {
    title: 'إعادة تشجير الغوطة',
    desc: 'يوم تطوعي لزراعة الأشجار في المناطق المتضررة.',
    date: '13 تشرين الأول 2025',
    location: 'ريف دمشق'
  },
  'clean': {
    title: 'مبادرة شارع نظيف',
    desc: 'تنظيف وتجميل أحياء دمشق القديمة بمشاركة الأهالي.',
    date: '22 تشرين الأول 2025', 
    location: 'دمشق'
  },
  'schools': {
    title: 'يوم تطوعي لترميم المدارس',
    desc: 'طلاب الجامعات يشاركون بإصلاح المقاعد والدهان في مدارس دمشق.',
    date: '5 تشرين الثاني 2025',
    location: 'دمشق'
  },
  'ramadan': {
    title: 'سوق رمضان الخيري',
    desc: 'بازار في باب توما لدعم الأسر قبيل العيد.',
    date: '18 تشرين الثاني 2025',
    location: 'باب توما'
  },
  'photos': {
    title: 'معرض صور دمشق تنهض',
    desc: 'صور فوتوغرافية قبل وبعد التحرير تُعرض في ساحة عامة.',
    date: '15 تشرين الأول 2025',
    location: 'دمشق'
  },
  'books': {
    title: 'حملة كتاب لكل بيت',
    desc: 'توزيع كتب مستعملة وجديدة لدعم الثقافة في المجتمع.',
    date: '9 تشرين الثاني 2025',
    location: 'دمشق'
  },
  'universities': {
    title: 'اليوم المفتوح للجامعات',
    desc: 'استقبال الأهالي والطلاب الجدد لتعريفهم بفرص التعليم.',
    date: '1 كانون الأول 2025',
    location: 'دمشق'
  },
  'food': {
    title: 'مهرجان الطعام الدمشقي',
    desc: 'تذوق أكلات شعبية تقليدية مع عروض فلكلورية.',
    date: '10 كانون الأول 2025',
    location: 'باب توما'
  },
  'kids': {
    title: 'مهرجان الأطفال للسلام',
    desc: 'نشاط ترفيهي وتعليمي للأطفال مع ألعاب ومسابقات رسم.',
    date: '22 كانون الأول 2025',
    location: 'ريف دمشق'
  }
},

'about': {
  'title': 'من نحن',
  'text': 'بوابة فعالية دمشق هي منصة مجتمعية تهدف إلى توثيق ومشاركة الفعاليات الخيرية والتطوعية والثقافية في دمشق، لتعزيز روح التعاون والمشاركة بين الأفراد والجمعيات.',
  'howTitle': 'كيفية إضافة فعالية',
  'howText': 'يمكن للأهالي أو الجمعيات إرسال تفاصيل فعالياتهم عبر صفحة التواصل ليتم مراجعتها وإضافتها إلى الموقع بعد التأكد من صحتها.',
  'team': {
    'reem': { 'name': 'ريم حشمة','role': 'مصممة الواجهة' },
    'rian': { 'name' : 'ريان الشاهين', 'role': 'مبرمجة الواجهة' },
    'abdulhadi': { 'name':'عبد الهادي بنيان', 'role': 'مبرمج الواجهة' },
  }
},

'footer': {
  'home': 'الرئيسية',
  'events': 'الفعاليات',
  'about': 'عن الموقع',
  'contact': 'اتصل بنا',
  'copyright': '© 2025 بوابة فعالية دمشق (DEG) — بإشراف الجمهورية العربية السورية 🇸🇾'
},
'contact': {
  'title': 'اتصل بنا',
  'formTitle': 'أرسل رسالة',
  'nameLabel': 'الاسم الكامل',
  'emailLabel': 'البريد الإلكتروني', 
  'messageLabel': 'الرسالة',
  'submitBtn': 'إرسال الرسالة',
  'sending': 'جاري الإرسال...',
  'contactInfo': 'معلومات التواصل',
  'emailInfo': 'البريد الإلكتروني',
  'phoneInfo': 'رقم الهاتف',
  'addressInfo': 'العنوان',
  'hoursInfo': 'ساعات العمل',
  'workHours': 'الأحد - الخميس: 9:00 ص - 5:00 م',
  'address': 'دمشق، سورية',
  'followUs': 'تابعنا على',
  'successMessage': 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.',
  'errorMessage': 'يرجى ملء جميع الحقول بشكل صحيح',
  'invalidEmail': 'يرجى إدخال بريد إلكتروني صحيح',
  'invalidName': 'يرجى إدخال الاسم الكامل',
  'invalidMessage': 'يرجى كتابة رسالتك'
},

'eventsPage': {
  'title': 'الفعاليات',
  'searchPlaceholder': 'ابحث عن فعالية...',
  'filterAllTypes': 'كل الأنواع',
  'filterCharity': 'خيري',
  'filterVolunteer': 'تطوعي',
  'filterCultural': 'ثقافي',
  'filterEnvironmental': 'بيئي',
  'filterAllDates': 'كل التواريخ',
  'filterAllLocations': 'كل الأماكن',
  'noResults': '⚠️ لم نعثر على فعاليات تطابق بحثك',
  'details': 'تفاصيل الفعالية',
  'quickView': 'عرض سريع'
},


'dates': {
  '2025-10': 'تشرين الأول 2025',
  '2025-11': 'تشرين الثاني 2025', 
  '2025-12': 'كانون الأول 2025'
},
'locations': {
  'دمشق': 'دمشق',
  'ريف دمشق': 'ريف دمشق',
  'باب توما': 'باب توما'
},
'eventPage': {
  'title': 'تفاصيل الفعالية',
  'descriptionTitle': 'وصف الفعالية',
  'goalsTitle': 'أهداف الفعالية', 
  'requirementsTitle': 'متطلبات المشاركة',
  'locationTitle': 'موقع الفعالية',
  'shareTitle': 'مشاركة الفعالية',
  'galleryTitle': 'معرض الصور',
  'relatedTitle': 'فعاليات ذات صلة',
  'shareBtn': 'مشاركة عبر واتساب',
  'calendarBtn': 'إضافة للتقويم',
  'viewDetailsBtn': 'عرض التفاصيل',
  'loadingEvent': 'جاري تحميل الفعالية...',
  'loadingDescription': 'جاري تحميل وصف الفعالية...',
  'loadingGoals': 'جاري تحميل الأهداف...',
  'loadingRequirements': 'جاري تحميل المتطلبات...',
  'loadingMap': 'جاري تحميل الخريطة...',
  'loadingLocation': 'جاري تحميل الموقع...',
  'errorNoEvent': 'لم يتم تحديد فعالية.',
  'errorNotFound': 'لم يتم العثور على الفعالية المطلوبة.'
},
aboutPage: {
  title: "عن دليل فعاليات دمشق",
  projectTitle: "نبذة عن المشروع",
  projectText: `بوابة فعالية دمشق (Damascus Event Gateway) هي منصة مجتمعية رائدة تهدف إلى توثيق ومشاركة الفعاليات الخيرية والتطوعية والثقافية في مدينة دمشق. 
نسعى من خلال هذه البوابة إلى تعزيز روح التعاون والمشاركة بين الأفراد والجمعيات، وإحياء النشاط المجتمعي في المدينة الأقدم في العالم.
رؤيتنا تتمثل في خلق مجتمع مترابط ينشط فيه الجميع للمساهمة في إعادة إعمار مدينتهم وتعزيز قيم التكافل والتعاون. نؤمن بأن التغيير يبدأ بخطوة، وكل فعالية هي بذرة خير تُزرع في تربة المجتمع الدمشقي الأصيل.`,
  teamTitle: "فريق العمل",
  teamIntro: "فريق شغوف يعمل بجد لتحقيق رؤية مجتمع نشط ومترابط في دمشق",
  team: {
    reem: {
      name: "ريم حشمة",
      role: "مصممة الواجهة",
      desc: "متخصصة في تصميم تجارب المستخدم والواجهات، تعمل على جعل المنصة سهلة الاستخدام وجميلة للمستخدمين."
    },
    rian: {
      name: "ريان الشاهين",
      role: "مبرمج الواجهة",
      desc: "مطور واجهات أمامية بخبرة في أحدث تقنيات الويب، يعمل على تحويل التصاميم إلى تجارب تفاعلية سلسة."
    },
    abdulhadi: {
      name: "عبد الهادي بنيان",
      role: "مبرمج الواجهة",
      desc: "مبرمج متخصص في تطوير الواجهات بتقنيات حديثة، يحرص على تقديم أفضل أداء وتجربة للمستخدم."
    }
  },
  howTitle: "كيفية إضافة فعالية",
  howText: "نرحب بجميع الجمعيات والمبادرات والأفراد للمساهمة في إثراء محتوى المنصة من خلال إضافة فعالياتهم. نضمن نشر الفعاليات بعد مراجعتها والتأكد من صحتها ومناسبتها لأهداف المنصة.",
  howSteps: {
    step1: { title: "تقديم الطلب", desc: "املأ نموذج إضافة الفعالية من خلال صفحة 'اتصل بنا' مع تقديم جميع المعلومات المطلوبة." },
    step2: { title: "المراجعة", desc: "يقوم فريقنا بمراجعة طلبك والتحقق من صحة المعلومات ومناسبة الفعالية لمعايير المنصة." },
    step3: { title: "النشر", desc: "بعد الموافقة، سيتم نشر فعاليتك على المنصة ليتمكن الجمهور من الاطلاع عليها والمشاركة فيها." },
    step4: { title: "المتابعة", desc: "يمكنك متابعة تفاعل الجمهور مع فعاليتك وتحديث المعلومات عند الحاجة عبر التواصل معنا." }
  },
  addEventBtn: "أضف فعاليتك الآن"
},





    },
    'en': {
      'title': 'Damascus Event Gateway',
      'sub': 'The platform that gathers initiatives and events in one place. Join, donate and be part of the positive impact in your community.',
      'btn': 'Damascus NEEDS YOU!',
      'home': 'Home', 
      'events': 'Events',
      'about': 'About',  // ✅ يجب أن يكون نصاً، ليس كائناً
      'contact': 'Contact',
        'featured': 'Featured Events',
        'discover': 'Discover Event',
'eventsData': {
  'bazaar': {
    title: 'Damascus Bazaar of Hope',
    desc: 'A charity exhibition of handmade and home products supporting affected families.'
  },
  'trees': {
    title: 'Reforesting Al-Ghouta',
    desc: 'A volunteering day for planting trees in affected areas.'
  },
  'children': {
    title: 'Children’s Peace Festival',
    desc: 'Fun and educational activities for kids with games and drawing contests.'
  },
  'schools': {
    title: 'School Renovation Day',
    desc: 'University students help repair desks and paint schools across Damascus.'
  },
  'ramadan': {
    title: 'Ramadan Charity Market',
    desc: 'A bazaar in Bab Touma supporting families before Eid.'
  },
  'photos': {
    title: 'Damascus Rising Photo Exhibition',
    desc: 'Photographs showing Damascus before and after liberation, displayed publicly.'
  },
  'books': {
    title: 'Book for Every Home Campaign',
    desc: 'Distributing new and used books to promote cultural awareness.'
  },
  'universities': {
    title: 'Universities Open Day',
    desc: 'Welcoming families and new students to explore education opportunities.'
  },
  'food': {
    title: 'Damascus Food Festival',
    desc: 'Taste traditional Syrian dishes with live folkloric performances.'
  },
  'clean': {
    title: 'Clean Street Initiative',
    desc: 'Cleaning and beautifying old Damascus neighborhoods with locals.'
  },
},
// ===== قسم حدث اليوم =====
   'today': {
     'title': 'Today’s Event',
     'badge': 'Today’s Event',
     'name': 'Reforesting Al-Ghouta',
     'location': 'Rural Damascus – Eastern Ghouta',
     'date': 'October 13, 2025',
     'btn': 'Event Details'
   },




'latest': {
      'title': 'Latest Events',
      'searchPlaceholder': 'Search for an event...',
      'allTypes': 'All Types',
      'charity': 'Charity',
      'volunteer': 'Volunteer',
      'cultural': 'Cultural',
      'environmental': 'Environmental',
      'allDates': 'All Dates',
      'october': 'October 2025',
      'november': 'November 2025',
      'december': 'December 2025',
      'allLocations': 'All Locations',
      'damascus': 'Damascus',
      'rural': 'Rural Damascus',
      'details': 'Details'
    },

//     'latestEventsData': {
//   'bazaar': {
//     title: 'Damascus Bazaar of Hope',
//     desc: 'A charity exhibition of handmade and home products supporting affected families.'
//   },
//   'trees': {
//     title: 'Reforesting Al-Ghouta',
//     desc: 'A volunteering day for planting trees in affected areas.'
//   },
//   'clean': {
//     title: 'Clean Street Initiative',
//     desc: 'Cleaning and beautifying the old neighborhoods of Damascus with the participation of the residents'
//   },
//   'schools': {
//     title: 'School Renovation Day',
//     desc: 'University students help repair desks and paint schools across Damascus.'
//   },
//   'ramadan': {
//     title: 'Ramadan Charity Market',
//     desc: 'A bazaar in Bab Touma supporting families before Eid.'
//   },
//   'photos': {
//     title: 'Damascus Rising Photo Exhibition',
//     desc: 'Photographs showing Damascus before and after liberation, displayed publicly.'
//   },
//   'books': {
//     title: 'Book for Every Home Campaign',
//     desc: 'Distributing new and used books to promote cultural awareness.'
//   },
//   'universities': {
//     title: 'Universities Open Day',
//     desc: 'Welcoming families and new students to explore education opportunities.'
//   },
//   'food': {
//     title: 'Damascus Food Festival',
//     desc: 'Taste traditional Syrian dishes with live folkloric performances.'
//   },
//   'kids': {
//     title: 'Children\'s Peace Festival',
//     desc: 'Fun and educational activities for kids with games and drawing contests.'
//   }
// },
'latestEventsData': {
  'bazaar': {
    title: 'Damascus Bazaar of Hope',
    desc: 'A charity exhibition of handmade and home products supporting affected families.',
    date: 'October 10, 2025',
    location: 'Damascus'
  },
  'trees': {
    title: 'Reforesting Al-Ghouta',
    desc: 'A volunteering day for planting trees in affected areas.',
    date: 'October 13, 2025',
    location: 'Rural Damascus'
  },
  'clean': {
    title: 'Clean Street Initiative',
    desc: 'Cleaning and beautifying the old neighborhoods of Damascus with the participation of the residents',
    date: 'October 22, 2025',
    location: 'Damascus'
  },
  'schools': {
    title: 'School Renovation Day',
    desc: 'University students help repair desks and paint schools across Damascus.',
    date: 'November 5, 2025',
    location: 'Damascus'
  },
  'ramadan': {
    title: 'Ramadan Charity Market',
    desc: 'A bazaar in Bab Touma supporting families before Eid.',
    date: 'November 18, 2025',
    location: 'Bab Touma'
  },
  'photos': {
    title: 'Damascus Rising Photo Exhibition',
    desc: 'Photographs showing Damascus before and after liberation, displayed publicly.',
    date: 'October 15, 2025',
    location: 'Damascus'
  },
  'books': {
    title: 'Book for Every Home Campaign',
    desc: 'Distributing new and used books to promote cultural awareness.',
    date: 'November 9, 2025',
    location: 'Damascus'
  },
  'universities': {
    title: 'Universities Open Day',
    desc: 'Welcoming families and new students to explore education opportunities.',
    date: 'December 1, 2025',
    location: 'Damascus'
  },
  'food': {
    title: 'Damascus Food Festival',
    desc: 'Taste traditional Syrian dishes with live folkloric performances.',
    date: 'December 10, 2025',
    location: 'Bab Touma'
  },
  'kids': {
    title: 'Children\'s Peace Festival',
    desc: 'Fun and educational activities for kids with games and drawing contests.',
    date: 'December 22, 2025',
    location: 'Rural Damascus'
  }
},


'about': {
  'title': 'About Us',
  'text': 'Damascus Event Gateway is a community platform aimed at documenting and sharing charity, volunteer, and cultural events in Damascus to strengthen collaboration among people and organizations.',
  'howTitle': 'How to Add an Event',
  'howText': 'Residents and associations can send event details via the contact page to be reviewed and added to the website after verification.',
  'team': {
    'reem': { 'name':'Reeem Hishma', 'role': 'UI Designer' },
    'rian': {'name':'Rayan Shaheen', 'role': 'Front-End Developer' },
    'abdulhadi': {'name' : 'Abd al-hadi Bonian' ,'role': 'Web Developer' },
    'reemname': { 'name': 'reem hishma' }

  }
},

'footer': {
  'home': 'Home',
  'events': 'Events',
  'about': 'About',
  'contact': 'Contact',
  'copyright': '© 2025 Damascus Event Gateway (DEG) — Under the supervision of the Syrian Arab Republic 🇸🇾'
},

'contact': {
  'title': 'Contact Us',
  'formTitle': 'Send a Message',
  'nameLabel': 'Full Name',
  'emailLabel': 'Email Address',
  'messageLabel': 'Message', 
  'submitBtn': 'Send Message',
  'sending': 'Sending...',
  'contactInfo': 'Contact Information',
  'emailInfo': 'Email Address',
  'phoneInfo': 'Phone Number',
  'addressInfo': 'Address',
  'hoursInfo': 'Working Hours',
  'workHours': 'Sunday - Thursday: 9:00 AM - 5:00 PM',
  'address': 'Damascus, Syria',
  'followUs': 'Follow Us',
  'successMessage': 'Your message has been sent successfully! We will contact you soon.',
  'errorMessage': 'Please fill all fields correctly',
  'invalidEmail': 'Please enter a valid email address',
  'invalidName': 'Please enter your full name',
  'invalidMessage': 'Please write your message'
},

'eventsPage': {
  'title': 'Events',
  'searchPlaceholder': 'Search for an event...',
  'filterAllTypes': 'All Types',
  'filterCharity': 'Charity',
  'filterVolunteer': 'Volunteer',
  'filterCultural': 'Cultural',
  'filterEnvironmental': 'Environmental',
  'filterAllDates': 'All Dates',
  'filterAllLocations': 'All Locations',
  'noResults': '⚠️ No events match your search',
  'details': 'Event Details',
  'quickView': 'Quick View'
},
'dates': {
  '2025-10': 'October 2025',
  '2025-11': 'November 2025',
  '2025-12': 'December 2025'
},
'locations': {
  'دمشق': 'Damascus',
  'ريف دمشق': 'Rural Damascus', 
  'باب توما': 'Bab Touma'
},
'eventPage': {
  'title': 'Event Details',
  'descriptionTitle': 'Event Description',
  'goalsTitle': 'Event Goals',
  'requirementsTitle': 'Participation Requirements',
  'locationTitle': 'Event Location', 
  'shareTitle': 'Share Event',
  'galleryTitle': 'Photo Gallery',
  'relatedTitle': 'Related Events',
  'shareBtn': 'Share via WhatsApp',
  'calendarBtn': 'Add to Calendar',
  'viewDetailsBtn': 'View Details',
  'loadingEvent': 'Loading event...',
  'loadingDescription': 'Loading event description...',
  'loadingGoals': 'Loading goals...',
  'loadingRequirements': 'Loading requirements...',
  'loadingMap': 'Loading map...',
  'loadingLocation': 'Loading location...',
  'errorNoEvent': 'No event specified.',
  'errorNotFound': 'Event not found.'
},

aboutPage: {
  title: "About Damascus Event Gateway",
  projectTitle: "About the Project",
  projectText: `Damascus Event Gateway (DEG) is a leading community platform that aims to document and share charitable, volunteer, and cultural events in Damascus. 
Through this gateway, we strive to promote collaboration and community participation, reviving social activity in the world’s oldest inhabited city.
Our vision is to create a connected society where everyone contributes to rebuilding their city and strengthening the values of solidarity and cooperation. We believe change begins with a single step — every event is a seed of goodness planted in the heart of Damascus.`,
  teamTitle: "Our Team",
  teamIntro: "A passionate team working hard to achieve the vision of an active, connected community in Damascus",
  team: {
    reem: {
      name: "Reem Hashmeh",
      role: "UI Designer",
      desc: "A UX/UI designer dedicated to creating user-friendly and visually appealing experiences for platform users."
    },
    rian: {
      name: "Rian Al-Shahine",
      role: "Front-End Developer",
      desc: "Front-end developer experienced with modern web technologies, turning designs into seamless interactive experiences."
    },
    abdulhadi: {
      name: "Abdulhadi Banyan",
      role: "Front-End Developer",
      desc: "A front-end developer passionate about modern frameworks and ensuring high performance and smooth user experience."
    }
  },
  howTitle: "How to Add an Event",
  howText: "We welcome all organizations, initiatives, and individuals to enrich our platform by adding their events. Events are published after being reviewed and verified for accuracy and relevance.",
  howSteps: {
    step1: { title: "Submit Request", desc: "Fill out the event submission form on the 'Contact Us' page with all required details." },
    step2: { title: "Review", desc: "Our team reviews your submission to verify its accuracy and relevance to our platform’s standards." },
    step3: { title: "Publish", desc: "Once approved, your event will be published on the platform for the public to view and participate in." },
    step4: { title: "Follow-Up", desc: "You can monitor audience engagement and update event details when needed by contacting us." }
  },
  addEventBtn: "Add Your Event Now"
},




    }
  };
  window.translations = translations;

  function setLanguage(lang){
    // set dir
    if(lang === 'ar'){
      document.documentElement.setAttribute('dir','rtl');
      document.documentElement.setAttribute('lang','ar');
    } else {
      document.documentElement.setAttribute('dir','ltr');
      document.documentElement.setAttribute('lang','en');
    }

    // update texts (add any selectors you need)
    const title = document.querySelector('.hero-title');
    const sub = document.querySelector('.hero-sub');
    const cta = document.getElementById('cta-btn');

    if(title) title.textContent = translations[lang].title;
    if(sub) sub.textContent = translations[lang].sub;
    if(cta) cta.textContent = translations[lang].btn;

    // Navbar links (assumes order)
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    if(navLinks.length >= 4){
      navLinks[0].textContent = translations[lang].home;
      navLinks[1].textContent = translations[lang].events;
     navLinks[2].textContent = lang === 'ar' ? 'عن الدليل' : 'About'; 
      // navLinks[3].textContent = translations[lang].contact;
      navLinks[3].textContent = lang === 'ar' ? 'اتصل بنا' : 'Contact Us'; 
    }


    // ===== قسم أبرز الفعاليات =====
const featuredTitle = document.querySelector('.section-title');
if (featuredTitle) featuredTitle.textContent = translations[lang].featured;

    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
    const key = card.dataset.event;
    const titleEl = card.querySelector('.event-title');
    const descEl = card.querySelector('.event-desc');
    const btnEl = card.querySelector('.discover-btn');

    const eventData = translations[lang].eventsData[key];
    if (eventData && titleEl && descEl && btnEl) {
        titleEl.textContent = eventData.title;
        descEl.textContent = eventData.desc;
        btnEl.textContent = translations[lang].discover;
    }
    });


// ===== قسم حدث اليوم =====
const todayTitle = document.querySelector('.today-title');
const badgeToday = document.querySelector('.badge-today');
const eventName = document.querySelector('.event-name');
const eventLocation = document.querySelector('.event-location');
const eventDate = document.querySelector('.event-date');
const eventBtn = document.querySelector('.btn-today');

if (todayTitle) todayTitle.textContent = translations[lang].today.title;
if (badgeToday) badgeToday.textContent = translations[lang].today.badge;
if (eventName) eventName.textContent = translations[lang].today.name;
if (eventLocation) eventLocation.textContent = translations[lang].today.location;
if (eventDate) eventDate.textContent = translations[lang].today.date;
if (eventBtn) eventBtn.textContent = translations[lang].today.btn;




// ===== قسم أحدث الفعاليات =====
const latestTitle = document.querySelector('.latest-events .section-title');
const searchInputEl = document.getElementById('searchInput');
const filterTypeEl = document.getElementById('filterType');
const filterDateEl = document.getElementById('filterDate');
const filterLocationEl = document.getElementById('filterLocation');
const latestButtons = document.querySelectorAll('.latest-btn');

if (latestTitle) latestTitle.textContent = translations[lang].latest.title;
if (searchInputEl) searchInputEl.placeholder = translations[lang].latest.searchPlaceholder;

// أنواع الفعاليات
if (filterTypeEl) {
  filterTypeEl.options[0].text = translations[lang].latest.allTypes;
  filterTypeEl.options[1].text = translations[lang].latest.charity;
  filterTypeEl.options[2].text = translations[lang].latest.volunteer;
  filterTypeEl.options[3].text = translations[lang].latest.cultural;
  filterTypeEl.options[4].text = translations[lang].latest.environmental;
}

// التواريخ
if (filterDateEl) {
  filterDateEl.options[0].text = translations[lang].latest.allDates;
  filterDateEl.options[1].text = translations[lang].latest.october;
  filterDateEl.options[2].text = translations[lang].latest.november;
  filterDateEl.options[3].text = translations[lang].latest.december;
}

// الأماكن
if (filterLocationEl) {
  filterLocationEl.options[0].text = translations[lang].latest.allLocations;
  filterLocationEl.options[1].text = translations[lang].latest.damascus;
  filterLocationEl.options[2].text = translations[lang].latest.rural;
}

// أزرار التفاصيل على البطاقات
latestButtons.forEach(btn => {
  btn.textContent = translations[lang].latest.details;
});


// ===== ترجمة كروت أحدث الفعاليات =====
const latestEventCards = document.querySelectorAll('.latest-card');
latestEventCards.forEach(card => {
  const key = card.dataset.event;
  const titleEl = card.querySelector('.latest-title');
  const descEl = card.querySelector('.latest-desc');
  const btnEl = card.querySelector('.latest-btn');

  const eventData = translations[lang].latestEventsData[key];
  if (eventData && titleEl && descEl && btnEl) {
    titleEl.textContent = eventData.title;
    descEl.textContent = eventData.desc;
    btnEl.textContent = translations[lang].latest.details;
  }






// ===== قسم من نحن =====
const aboutTitle = document.querySelector('.about-section .section-title');
const aboutText = document.querySelector('.about-text');
const howTitle = document.querySelector('.add-title');
const howText = document.querySelector('.how-to-add p');

if (aboutTitle) aboutTitle.textContent = translations[lang].about.title;
if (aboutText) aboutText.textContent = translations[lang].about.text;
if (howTitle) howTitle.textContent = translations[lang].about.howTitle;
if (howText) howText.textContent = translations[lang].about.howText;
// ===== ترجمة قسم الفريق =====
const teamCards = document.querySelectorAll('.team-card');
const teamKeys = ['reem', 'rian', 'abdulhadi'];

teamCards.forEach((card, index) => {
  const memberKey = teamKeys[index];
  const nameEl = card.querySelector('.team-name');
  const roleEl = card.querySelector('.team-role');
  const teamData = translations[lang].about.team[memberKey];

  if (nameEl && roleEl && teamData) {
    nameEl.textContent = teamData.name;
    roleEl.textContent = teamData.role;
  }
});

// ===== Footer =====
const footerLinks = document.querySelectorAll('.footer-links a');
if (footerLinks.length >= 4) {
  footerLinks[0].textContent = translations[lang].footer.home;
  footerLinks[1].textContent = translations[lang].footer.events;
  footerLinks[2].textContent = translations[lang].footer.about;
  footerLinks[3].textContent = translations[lang].footer.contact;
}

const footerCopy = document.querySelector('.footer-bottom p');
if (footerCopy) footerCopy.textContent = translations[lang].footer.copyright;

// ===== قسم اتصل بنا =====
const contactTitle = document.querySelector('.contact-page__title');
const contactFormTitle = document.querySelector('.contact-form__title');
const contactInfoTitle = document.querySelector('.contact-info__title');
const socialMediaTitle = document.querySelector('.social-media__title');

if (contactTitle) contactTitle.textContent = translations[lang].contact.title;
if (contactFormTitle) contactFormTitle.textContent = translations[lang].contact.formTitle;
if (contactInfoTitle) contactInfoTitle.textContent = translations[lang].contact.contactInfo;
if (socialMediaTitle) socialMediaTitle.textContent = translations[lang].contact.followUs;

// تسميات الحقول في النموذج
const nameLabel = document.querySelector('label[for="name"]');
const emailLabel = document.querySelector('label[for="email"]');
const messageLabel = document.querySelector('label[for="message"]');
const submitBtn = document.getElementById('submitBtn');

if (nameLabel) nameLabel.textContent = translations[lang].contact.nameLabel;
if (emailLabel) emailLabel.textContent = translations[lang].contact.emailLabel;
if (messageLabel) messageLabel.textContent = translations[lang].contact.messageLabel;
if (submitBtn) submitBtn.textContent = translations[lang].contact.submitBtn;

// عناصر معلومات الاتصال - الطريقة المحسنة
const contactInfoItems = document.querySelectorAll('.contact-info__item');
contactInfoItems.forEach((item, index) => {
    const contentDiv = item.querySelector('.contact-info__content');
    if (contentDiv) {
        const heading = contentDiv.querySelector('h4');
        const paragraph = contentDiv.querySelector('p');
        
        if (heading && paragraph) {
            switch (index) {
                case 0: // البريد الإلكتروني
                    heading.textContent = translations[lang].contact.emailInfo;
                    // لا نغير النص هنا لأنه ثابت (info@deg.com)
                    break;
                case 1: // رقم الهاتف
                    heading.textContent = translations[lang].contact.phoneInfo;
                    // لا نغير النص هنا لأنه ثابت (+963 11 123 4567)
                    break;
                case 2: // العنوان
                    heading.textContent = translations[lang].contact.addressInfo;
                    paragraph.textContent = translations[lang].contact.address; // ✅ هذا السطر الجديد
                    break;
                case 3: // ساعات العمل
                    heading.textContent = translations[lang].contact.hoursInfo;
                    paragraph.textContent = translations[lang].contact.workHours; // ✅ هذا السطر الجديد
                    break;
            }
        }
    } 
});

// تحديث نصوص التحقق من الصحة
const invalidFeedbacks = document.querySelectorAll('.invalid-feedback');
if (invalidFeedbacks.length >= 3) {
    invalidFeedbacks[0].textContent = translations[lang].contact.invalidName;
    invalidFeedbacks[1].textContent = translations[lang].contact.invalidEmail;
    invalidFeedbacks[2].textContent = translations[lang].contact.invalidMessage;
}

});

// // ===== ترجمة صفحة الفعاليات (events.html) =====
// const eventsPageTitle = document.querySelector('.events-page__title');
// const eventsSearchInput = document.getElementById('eventsSearchInput');
// const eventsFilterType = document.getElementById('eventsFilterType');
// const eventsFilterDate = document.getElementById('eventsFilterDate');
// const eventsFilterLocation = document.getElementById('eventsFilterLocation');
// const noEventsResults = document.getElementById('noEventsResults');
// const detailsButtons = document.querySelectorAll('.events-page__btn-details');
// const quickViewButtons = document.querySelectorAll('.events-page__btn-quickview');

// if (eventsPageTitle) eventsPageTitle.textContent = translations[lang].eventsPage.title;
// if (eventsSearchInput) eventsSearchInput.placeholder = translations[lang].eventsPage.searchPlaceholder;

// // ترجمة خيارات التصفية (النوع)
// if (eventsFilterType) {
//   eventsFilterType.options[0].text = translations[lang].eventsPage.filterAllTypes;
//   eventsFilterType.options[1].text = translations[lang].eventsPage.filterCharity;
//   eventsFilterType.options[2].text = translations[lang].eventsPage.filterVolunteer;
//   eventsFilterType.options[3].text = translations[lang].eventsPage.filterCultural;
//   eventsFilterType.options[4].text = translations[lang].eventsPage.filterEnvironmental;
// }

// // ترجمة خيارات التصفية (التاريخ)
// if (eventsFilterDate) {
//   eventsFilterDate.options[0].text = translations[lang].eventsPage.filterAllDates;
//   // التواريخ المحددة يمكن تركها كما هي أو إضافتها للترجمة لاحقاً
// }

// // ترجمة خيارات التصفية (المكان)
// if (eventsFilterLocation) {
//   eventsFilterLocation.options[0].text = translations[lang].eventsPage.filterAllLocations;
//   // الأماكن المحددة يمكن تركها كما هي أو إضافتها للترجمة لاحقاً
// }

// if (noEventsResults) {
//   const p = noEventsResults.querySelector('p');
//   if (p) p.textContent = translations[lang].eventsPage.noResults;
// }

// // ترجمة أزرار التفاصيل
// detailsButtons.forEach(btn => {
//   btn.textContent = translations[lang].eventsPage.details;
// });

// // ترجمة أزرار العرض السريع
// quickViewButtons.forEach(btn => {
//   btn.textContent = translations[lang].eventsPage.quickView;
// });

// ===== ترجمة صفحة الفعاليات (events.html) =====
const eventsPageTitle = document.querySelector('.events-page__title');
const eventsSearchInput = document.getElementById('eventsSearchInput');
const eventsFilterType = document.getElementById('eventsFilterType');
const eventsFilterDate = document.getElementById('eventsFilterDate');
const eventsFilterLocation = document.getElementById('eventsFilterLocation');
const noEventsResults = document.getElementById('noEventsResults');
const detailsButtons = document.querySelectorAll('.events-page__btn-details');
const quickViewButtons = document.querySelectorAll('.events-page__btn-quickview');

if (eventsPageTitle) eventsPageTitle.textContent = translations[lang].eventsPage.title;
if (eventsSearchInput) eventsSearchInput.placeholder = translations[lang].eventsPage.searchPlaceholder;

// ترجمة خيارات التصفية (النوع)
if (eventsFilterType) {
  eventsFilterType.options[0].text = translations[lang].eventsPage.filterAllTypes;
  eventsFilterType.options[1].text = translations[lang].eventsPage.filterCharity;
  eventsFilterType.options[2].text = translations[lang].eventsPage.filterVolunteer;
  eventsFilterType.options[3].text = translations[lang].eventsPage.filterCultural;
  eventsFilterType.options[4].text = translations[lang].eventsPage.filterEnvironmental;
}

// ترجمة خيارات التصفية (التاريخ)
if (eventsFilterDate) {
  eventsFilterDate.options[0].text = translations[lang].eventsPage.filterAllDates;
  // ترجمة التواريخ المحددة
  eventsFilterDate.options[1].text = translations[lang].dates['2025-10'];
  eventsFilterDate.options[2].text = translations[lang].dates['2025-11'];
  eventsFilterDate.options[3].text = translations[lang].dates['2025-12'];
}

// ترجمة خيارات التصفية (المكان)
if (eventsFilterLocation) {
  eventsFilterLocation.options[0].text = translations[lang].eventsPage.filterAllLocations;
  // ترجمة الأماكن المحددة
  eventsFilterLocation.options[1].text = translations[lang].locations['دمشق'];
  eventsFilterLocation.options[2].text = translations[lang].locations['ريف دمشق'];
  eventsFilterLocation.options[3].text = translations[lang].locations['باب توما'];
}

if (noEventsResults) {
  const p = noEventsResults.querySelector('p');
  if (p) p.textContent = translations[lang].eventsPage.noResults;
}

// ترجمة أزرار التفاصيل
detailsButtons.forEach(btn => {
  btn.textContent = translations[lang].eventsPage.details;
});

// ترجمة أزرار العرض السريع
quickViewButtons.forEach(btn => {
  btn.textContent = translations[lang].eventsPage.quickView;
});

// ===== ترجمة كروت الفعاليات في صفحة events.html =====
const eventsPageCards = document.querySelectorAll('.events-page__card');
eventsPageCards.forEach(card => {
  const key = card.dataset.event;
  const titleEl = card.querySelector('.events-page__card-title');
  const descEl = card.querySelector('.events-page__card-desc');
  const dateEl = card.querySelector('.events-page__card-date');
  const locationEl = card.querySelector('.events-page__card-location');
  const badgeEl = card.querySelector('.events-page__card-badge');

  // استخدام بيانات latestEventsData الموجودة
  const eventData = translations[lang].latestEventsData[key];
  
  if (eventData) {
    if (titleEl) titleEl.textContent = eventData.title;
    if (descEl) descEl.textContent = eventData.desc;
    if (dateEl && eventData.date) dateEl.textContent = eventData.date;
    if (locationEl && eventData.location) locationEl.textContent = eventData.location;
  }

  // ترجمة البادجات
  if (badgeEl) {
    const eventType = card.dataset.type;
    switch(eventType) {
      case 'خيري':
        badgeEl.textContent = translations[lang].eventsPage.filterCharity;
        break;
      case 'تطوعي':
        badgeEl.textContent = translations[lang].eventsPage.filterVolunteer;
        break;
      case 'ثقافي':
        badgeEl.textContent = translations[lang].eventsPage.filterCultural;
        break;
      case 'بيئي':
        badgeEl.textContent = translations[lang].eventsPage.filterEnvironmental;
        break;
    }
  }
});

// ===== ترجمة الفوتر في صفحة events.html =====
const eventsFooter = document.querySelector('.site-footer p');
if (eventsFooter) {
  eventsFooter.textContent = translations[lang].footer.copyright;
}


// ===== ترجمة صفحة تفاصيل الفعالية (event.html) =====
const eventPageTitle = document.querySelector('.event-details__title');
const descriptionTitle = document.querySelector('.event-details__section-title:nth-of-type(1)');
const goalsTitle = document.querySelector('.event-details__section-title:nth-of-type(2)');
const requirementsTitle = document.querySelector('.event-details__section-title:nth-of-type(3)');
const locationTitle = document.querySelector('.event-details__sidebar .event-details__section-title:nth-of-type(1)');
const shareTitle = document.querySelector('.event-details__sidebar .event-details__section-title:nth-of-type(2)');
const galleryTitle = document.querySelector('.event-details__gallery .event-details__section-title');
const relatedTitle = document.querySelector('.related-events__title');
const shareBtn = document.querySelector('.event-details__action-btn--share');
const calendarBtn = document.querySelector('.event-details__action-btn--calendar');
const viewDetailsBtns = document.querySelectorAll('.related-event-card__btn');

if (eventPageTitle && eventPageTitle.textContent === 'جاري تحميل الفعالية...') {
  eventPageTitle.textContent = translations[lang].eventPage.loadingEvent;
}

if (descriptionTitle) descriptionTitle.textContent = translations[lang].eventPage.descriptionTitle;
if (goalsTitle) goalsTitle.textContent = translations[lang].eventPage.goalsTitle;
if (requirementsTitle) requirementsTitle.textContent = translations[lang].eventPage.requirementsTitle;
if (locationTitle) locationTitle.textContent = translations[lang].eventPage.locationTitle;
if (shareTitle) shareTitle.textContent = translations[lang].eventPage.shareTitle;
if (galleryTitle) galleryTitle.textContent = translations[lang].eventPage.galleryTitle;
if (relatedTitle) relatedTitle.textContent = translations[lang].eventPage.relatedTitle;

if (shareBtn) shareBtn.textContent = translations[lang].eventPage.shareBtn;
if (calendarBtn) calendarBtn.textContent = translations[lang].eventPage.calendarBtn;

viewDetailsBtns.forEach(btn => {
  btn.textContent = translations[lang].eventPage.viewDetailsBtn;
});

// ترجمة نصوص التحميل والأخطاء
const eventDescription = document.getElementById('eventDescription');
const eventGoals = document.getElementById('eventGoals');
const eventRequirements = document.getElementById('eventRequirements');
const eventMap = document.getElementById('eventMap');
const eventLocationText = document.getElementById('eventLocationText');

if (eventDescription && eventDescription.textContent.includes('جاري تحميل وصف الفعالية...')) {
  eventDescription.textContent = translations[lang].eventPage.loadingDescription;
}

if (eventGoals && eventGoals.textContent.includes('جاري تحميل الأهداف...')) {
  eventGoals.innerHTML = `<li>${translations[lang].eventPage.loadingGoals}</li>`;
}

if (eventRequirements && eventRequirements.textContent.includes('جاري تحميل المتطلبات...')) {
  eventRequirements.textContent = translations[lang].eventPage.loadingRequirements;
}

if (eventMap && eventMap.textContent.includes('جاري تحميل الخريطة...')) {
  eventMap.textContent = translations[lang].eventPage.loadingMap;
}

if (eventLocationText && eventLocationText.textContent.includes('جاري تحميل الموقع...')) {
  eventLocationText.textContent = translations[lang].eventPage.loadingLocation;
}

// ===== ترجمة الفوتر في صفحة event.html =====
const eventFooter = document.querySelector('.site-footer p');
if (eventFooter) {
  eventFooter.textContent = translations[lang].footer.copyright;
}




// ===== صفحة عن الدليل (about.html) =====
const aboutPageTitle = document.querySelector('.about-page__title');
const aboutProjectTitle = document.querySelector('.about-project__title');
const aboutProjectText = document.querySelector('.about-project__text');
const teamSectionTitle = document.querySelector('.team-section__title');
const teamIntroText = document.querySelector('.team-section p.about-project__text');
const teamCardsAbout = document.querySelectorAll('.team-card');
const howAddTitle = document.querySelector('.how-to-add__title');
const howAddText = document.querySelector('.how-to-add__text');
const howAddSteps = document.querySelectorAll('.how-to-add__step');
const addEventBtn = document.querySelector('.how-to-add a.events-page__btn-details');

if (aboutPageTitle) aboutPageTitle.textContent = translations[lang].aboutPage.title;
if (aboutProjectTitle) aboutProjectTitle.textContent = translations[lang].aboutPage.projectTitle;
if (aboutProjectText) aboutProjectText.textContent = translations[lang].aboutPage.projectText;
if (teamSectionTitle) teamSectionTitle.textContent = translations[lang].aboutPage.teamTitle;
if (teamIntroText) teamIntroText.textContent = translations[lang].aboutPage.teamIntro;
if (howAddTitle) howAddTitle.textContent = translations[lang].aboutPage.howTitle;
if (howAddText) howAddText.textContent = translations[lang].aboutPage.howText;
if (addEventBtn) addEventBtn.textContent = translations[lang].aboutPage.addEventBtn;

// فريق العمل
teamCardsAbout.forEach((card, index) => {
  const nameEl = card.querySelector('.team-card__name');
  const roleEl = card.querySelector('.team-card__role');
  const descEl = card.querySelector('.team-card__description');
  const memberKey = ['reem', 'rian', 'abdulhadi'][index];
  const data = translations[lang].aboutPage.team[memberKey];
  if (data && nameEl && roleEl && descEl) {
    nameEl.textContent = data.name;
    roleEl.textContent = data.role;
    descEl.textContent = data.desc;
  }
});

// خطوات "كيفية إضافة فعالية"
howAddSteps.forEach((step, i) => {
  const numEl = step.querySelector('.how-to-add__step-number');
  const titleEl = step.querySelector('.how-to-add__step-title');
  const descEl = step.querySelector('.how-to-add__step-description');
  const stepKey = `step${i + 1}`;
  const stepData = translations[lang].aboutPage.howSteps[stepKey];
  if (titleEl && descEl && stepData) {
    titleEl.textContent = stepData.title;
    descEl.textContent = stepData.desc;
  }
});





































































/////////////////////////////////////////////////////////////////////


    // persist selection (optional)
    try{ localStorage.setItem('deg_lang', lang); }catch(e){}
  }

  // attach click handlers
  flags.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
      // optional: visual indicator
      flags.forEach(f=> f.style.boxShadow = '');
      btn.style.boxShadow = '0 6px 18px rgba(0,0,0,.22)';
    });
  });

  // restore previous language if موجود
  try{
    const saved = localStorage.getItem('deg_lang') || 'ar';
    // simulate click on corresponding flag for visual consistency
    const defaultBtn = document.querySelector(`.flag-btn[data-lang="${saved}"]`);
    if(defaultBtn) defaultBtn.click();
    else setLanguage(saved);
  }catch(e){
    setLanguage('ar');
  }

});
// تأثير التمرير على الـNavbar
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// تبديل الوضع Light / Dark
const modeBtn = document.getElementById('modeToggle');
modeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    modeBtn.textContent = '☀️';
  } else {
    modeBtn.textContent = '🌙';
  }
});









// ===== قسم أبرز الفعاليات =====
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".event-card");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const dotsContainer = document.getElementById("sliderDots");
  let currentIndex = 0;

  cards.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  function updateCards() {
    cards.forEach((card) => {
      card.classList.remove("active");
      card.style.display = "none";
    });

    const prev = (currentIndex - 1 + cards.length) % cards.length;
    const next = (currentIndex + 1) % cards.length;

    cards[prev].style.display = "block";
    cards[currentIndex].style.display = "block";
    cards[next].style.display = "block";

    cards[currentIndex].classList.add("active");

    dots.forEach((dot) => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
  }

  function next() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCards();
  }

  function prev() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCards();
  }

  function goTo(index) {
    currentIndex = index;
    updateCards();
  }

  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);

  updateCards();
});









// // --- فلترة وبحث قسم أحدث الفعاليات ---
// const searchInput = document.getElementById('searchInput');
// const filterType = document.getElementById('filterType');
// const filterDate = document.getElementById('filterDate');
// const filterLocation = document.getElementById('filterLocation');
// const latestCards = document.querySelectorAll('.latest-card');

// function filterEvents() {
//   const searchText = searchInput.value.toLowerCase().trim();
//   const selectedType = filterType.value;
//   const selectedDate = filterDate.value;
//   const selectedLocation = filterLocation.value;

//   latestCards.forEach(card => {
//     const title = card.querySelector('h3').textContent.toLowerCase();
//     const type = card.dataset.type;
//     const date = card.dataset.date;
//     const location = card.dataset.location;

//     const matchSearch = title.includes(searchText);
//     const matchType = (selectedType === 'all' || selectedType === type);
//     const matchDate = (selectedDate === 'all' || selectedDate === date);
//     const matchLocation = (selectedLocation === 'all' || selectedLocation === location);

//     const isVisible = matchSearch && matchType && matchDate && matchLocation;

//     // تأثير بسيط للظهور والاختفاء
//     if (isVisible) {
//       card.style.opacity = '1';
//       card.style.transform = 'scale(1)';
//       card.style.pointerEvents = 'auto';
//       card.style.display = 'block';
//     } else {
//       card.style.opacity = '0';
//       card.style.transform = 'scale(0.95)';
//       card.style.pointerEvents = 'none';
//       setTimeout(() => {
//         card.style.display = 'none';
//       }, 200);
//     }
//   });
// }

// // ====== مراقبة تغييرات البحث والفلاتر ======
// if (searchInput) {
//   searchInput.addEventListener('input', filterEvents);
// }
// if (filterType) {
//   filterType.addEventListener('change', filterEvents);
// }
// if (filterDate) {
//   filterDate.addEventListener('change', filterEvents);
// }
// if (filterLocation) {
//   filterLocation.addEventListener('change', filterEvents);
// }

// // تشغيل الفلترة عند تحميل الصفحة
// filterEvents();






// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////// EVENTS ////////////////////////////////////////////////////

// // js/main.js
// // 🔹 الوضع الداكن (لكل الصفحات)
function initializeDarkMode() {
    const modeToggle = document.getElementById('mode-Toggle');
    const body = document.body;

    if (!modeToggle) return;

    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
        body.classList.add('dark-mode');
        modeToggle.textContent = '☀️';
    }

    modeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            modeToggle.textContent = '☀️';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            modeToggle.textContent = '🌙';
        }
    });
}


///////////////////////////////////////////////////////////////////////////////
// 🏠 فلترة وبحث قسم "أحدث الفعاليات" (فقط في index.html)
function initializeLatestEventsFilter() {
  const searchInput = document.getElementById('searchInput');
  const filterType = document.getElementById('filterType');
  const filterDate = document.getElementById('filterDate');
  const filterLocation = document.getElementById('filterLocation');
  const latestCards = document.querySelectorAll('.latest-card');

  // إذا العناصر مش موجودة → ما ننفّذ شي
  if (!searchInput || latestCards.length === 0) return;

  function filterEvents() {
    const searchText = searchInput.value.toLowerCase().trim();
    const selectedType = filterType.value;
    const selectedDate = filterDate.value;
    const selectedLocation = filterLocation.value;

    latestCards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const type = card.dataset.type;
      const date = card.dataset.date;
      const location = card.dataset.location;

      const matchSearch = title.includes(searchText);
      const matchType = (selectedType === 'all' || selectedType === type);
      const matchDate = (selectedDate === 'all' || selectedDate === date);
      const matchLocation = (selectedLocation === 'all' || selectedLocation === location);

      const isVisible = matchSearch && matchType && matchDate && matchLocation;

      if (isVisible) {
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
        card.style.pointerEvents = 'auto';
        card.style.display = 'block';
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        card.style.pointerEvents = 'none';
        setTimeout(() => {
          card.style.display = 'none';
        }, 200);
      }
    });
  }

  // أحداث التغيير
  searchInput.addEventListener('input', filterEvents);
  filterType.addEventListener('change', filterEvents);
  filterDate.addEventListener('change', filterEvents);
  filterLocation.addEventListener('change', filterEvents);

  filterEvents(); // تشغيل أولي
}

///////////////////////////////////////////////////////////////////////////////
// 📅 فلترة صفحة الفعاليات (فقط في events.html)
function initializeEventsPageFilter() {
  const searchInput = document.getElementById('eventsSearchInput');
  const eventCards = document.querySelectorAll('.events-page__card');
  if (!searchInput || eventCards.length === 0) return;

  const searchBtn = document.getElementById('eventsSearchBtn');
  const filterType = document.getElementById('eventsFilterType');
  const filterDate = document.getElementById('eventsFilterDate');
  const filterLocation = document.getElementById('eventsFilterLocation');
  const noResults = document.getElementById('noEventsResults');

  function filterEvents() {
    const searchText = searchInput.value.toLowerCase().trim();
    const selectedType = filterType.value;
    const selectedDate = filterDate.value;
    const selectedLocation = filterLocation.value;
    let visibleCount = 0;

    eventCards.forEach(card => {
      const title = card.querySelector('.events-page__card-title').textContent.toLowerCase();
      const desc = card.querySelector('.events-page__card-desc').textContent.toLowerCase();
      const type = card.dataset.type;
      const date = card.dataset.date;
      const location = card.dataset.location;

      const matchSearch = title.includes(searchText) || desc.includes(searchText);
      const matchType = (selectedType === 'all' || selectedType === type);
      const matchDate = (selectedDate === 'all' || selectedDate === date);
      const matchLocation = (selectedLocation === 'all' || selectedLocation === location);

      const isVisible = matchSearch && matchType && matchDate && matchLocation;

      card.style.display = isVisible ? 'block' : 'none';
      if (isVisible) visibleCount++;
    });

    noResults.style.display = (visibleCount === 0) ? 'block' : 'none';
  }

  searchInput.addEventListener('input', filterEvents);
  filterType.addEventListener('change', filterEvents);
  filterDate.addEventListener('change', filterEvents);
  filterLocation.addEventListener('change', filterEvents);
  if (searchBtn) searchBtn.addEventListener('click', filterEvents);

  filterEvents(); // تشغيل أولي
}

///////////////////////////////////////////////////////////////////////////////
// 🚀 التهيئة العامة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function () {
  initializeDarkMode();
  initializeLatestEventsFilter();
  initializeEventsPageFilter();
});
























///////////////////////////////////
///////////// كود فسم about /////////

    // تأثير التكبير على صور الفريق
    document.addEventListener('DOMContentLoaded', function() {
      const teamCards = document.querySelectorAll('.team-card');
      
      teamCards.forEach(card => {
        // تأثير إضافي عند التمرير
        card.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0) scale(1)';
        });
      });
    });





















    ////////////////////////////
    ///////////// الكود الخاص بقسم Contact 
    
    // دالة للحصول على النص المترجم بأمان
    function getTranslatedText(key, fallback) {
        const currentLang = document.documentElement.lang || 'ar';
        try {
            if (window.translations && 
                window.translations[currentLang] && 
                window.translations[currentLang].contact) {
                return window.translations[currentLang].contact[key] || fallback;
            }
        } catch (e) {
            console.error('Error loading translation:', e);
        }
        return fallback;
    }

    document.addEventListener('DOMContentLoaded', function() {
        const contactForm = document.getElementById('contactForm');
        const alertContainer = document.getElementById('alertContainer');
        const submitBtn = document.getElementById('submitBtn');

        // تحديث النصوص عند تحميل الصفحة
        updateContactTexts();

        // دالة لعرض التنبيهات
        function showAlert(message, type) {
            const alert = document.createElement('div');
            alert.className = `alert alert-${type}`;
            
            // استخدام النصوص المترجمة
            let alertMessage = message;
            if (type === 'success') {
                alertMessage = getTranslatedText('successMessage', 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
            } else if (type === 'danger') {
                alertMessage = getTranslatedText('errorMessage', 'يرجى ملء جميع الحقول بشكل صحيح');
            }
            
            alert.textContent = alertMessage;
            alertContainer.innerHTML = '';
            alertContainer.appendChild(alert);
            
            // إزالة التنبيه تلقائياً بعد 5 ثواني
            setTimeout(() => {
                alert.remove();
            }, 5000);
        }

        // دالة للتحقق من صحة البريد الإلكتروني
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        // دالة لتحديث جميع النصوص في الصفحة
        function updateContactTexts() {
            const currentLang = document.documentElement.lang || 'ar';
            
            // تحديث النصوص إذا كانت الترجمات متاحة
            if (window.translations && window.translations[currentLang]) {
                const contactTexts = window.translations[currentLang].contact;
                
                // تحديث العناوين
                const contactTitle = document.querySelector('.contact-page__title');
                const contactFormTitle = document.querySelector('.contact-form__title');
                const contactInfoTitle = document.querySelector('.contact-info__title');
                const socialMediaTitle = document.querySelector('.social-media__title');

                if (contactTitle) contactTitle.textContent = contactTexts.title;
                if (contactFormTitle) contactFormTitle.textContent = contactTexts.formTitle;
                if (contactInfoTitle) contactInfoTitle.textContent = contactTexts.contactInfo;
                if (socialMediaTitle) socialMediaTitle.textContent = contactTexts.followUs;

                // تحديث تسميات الحقول
                const nameLabel = document.querySelector('label[for="name"]');
                const emailLabel = document.querySelector('label[for="email"]');
                const messageLabel = document.querySelector('label[for="message"]');

                if (nameLabel) nameLabel.textContent = contactTexts.nameLabel;
                if (emailLabel) emailLabel.textContent = contactTexts.emailLabel;
                if (messageLabel) messageLabel.textContent = contactTexts.messageLabel;

                // تحديث زر الإرسال
                if (submitBtn) submitBtn.textContent = contactTexts.submitBtn;

                // تحديث عناصر معلومات الاتصال
                const contactInfoItems = document.querySelectorAll('.contact-info__content h4');
                if (contactInfoItems.length >= 4) {
                    contactInfoItems[0].textContent = contactTexts.emailInfo;
                    contactInfoItems[1].textContent = contactTexts.phoneInfo;
                    contactInfoItems[2].textContent = contactTexts.addressInfo;
                    contactInfoItems[3].textContent = contactTexts.hoursInfo;
                }

                // تحديث نصوص التحقق من الصحة
                const invalidFeedbacks = document.querySelectorAll('.invalid-feedback');
                if (invalidFeedbacks.length >= 3) {
                    invalidFeedbacks[0].textContent = contactTexts.invalidName;
                    invalidFeedbacks[1].textContent = contactTexts.invalidEmail;
                    invalidFeedbacks[2].textContent = contactTexts.invalidMessage;
                }
            }
        }

        // التحقق من الحقول في الوقت الحقيقي
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                if (this.checkValidity()) {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                } else {
                    this.classList.remove('is-valid');
                }
            });
        });

        // التحقق من البريد الإلكتروني بشكل منفصل
        const emailInput = document.getElementById('email');
        emailInput.addEventListener('blur', function() {
            if (this.value && !isValidEmail(this.value)) {
                this.classList.add('is-invalid');
                this.classList.remove('is-valid');
            }
        });

        // معالجة إرسال النموذج
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // إعادة تعيين التنبيهات
            alertContainer.innerHTML = '';
            
            // التحقق من صحة جميع الحقول
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            // التحقق من الاسم
            if (!name.value.trim()) {
                name.classList.add('is-invalid');
                isValid = false;
            } else {
                name.classList.remove('is-invalid');
                name.classList.add('is-valid');
            }

            // التحقق من البريد الإلكتروني
            if (!email.value.trim() || !isValidEmail(email.value)) {
                email.classList.add('is-invalid');
                isValid = false;
            } else {
                email.classList.remove('is-invalid');
                email.classList.add('is-valid');
            }

            // التحقق من الرسالة
            if (!message.value.trim()) {
                message.classList.add('is-invalid');
                isValid = false;
            } else {
                message.classList.remove('is-invalid');
                message.classList.add('is-valid');
            }

            if (!isValid) {
                showAlert('', 'danger');
                return;
            }

            // محاكاة إرسال النموذج
            submitBtn.disabled = true;
            const currentLang = document.documentElement.lang || 'ar';
            const sendingText = window.translations && window.translations[currentLang] ? 
                window.translations[currentLang].contact.sending : 'جاري الإرسال...';
            submitBtn.textContent = sendingText;

            // محاكاة تأخير الشبكة
            setTimeout(() => {
                // في التطبيق الحقيقي، هنا سيتم إرسال البيانات إلى الخادم
                console.log('تم إرسال النموذج:', {
                    name: name.value,
                    email: email.value,
                    message: message.value
                });

                // عرض رسالة النجاح
                showAlert('', 'success');
                
                // إعادة تعيين النموذج
                contactForm.reset();
                inputs.forEach(input => {
                    input.classList.remove('is-valid', 'is-invalid');
                });

                // إعادة تفعيل الزر
                submitBtn.disabled = false;
                updateContactTexts(); // إعادة تعيين نص الزر
            }, 2000);
        });

        // تأثيرات إضافية لأيقونات وسائل التواصل
        const socialIcons = document.querySelectorAll('.social-icon');
        socialIcons.forEach(icon => {
            icon.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
            });
            
            icon.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });

        // تحديث النصوص عند تغيير اللغة
        const flagButtons = document.querySelectorAll('.flag-btn');
        flagButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                // انتظر قليلاً ثم حدث النصوص
                setTimeout(updateContactTexts, 100);
            });
        });
    });
