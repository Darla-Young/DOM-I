const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')


// HEADER
// navs
const navs = document.querySelectorAll('a');
const navArr = Object.values(siteContent.nav);
for (let i = 0; i < navs.length - 1; i++) {
  navs[i].className = "italic";
  navs[i].textContent = navArr[i];
}
// img 
const headImg = document.querySelector('#logo-img');
headImg.setAttribute('src', siteContent.images["logo-img"]);

// CTA SECTION
// div
const ctaDiv = document.querySelector('.cta-text');
ctaDiv[0].textContent = siteContent.cta.h1;
// ctaDiv.button = siteContent.cta.button;
console.log(ctaDiv);

// img
const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent.images['cta-img']);
      
    //   src=siteContent.images.cta-img
    
    //     const text = document.querySelectorAll('.text-content');
    //       text[0] = siteContent.main-content._________-h4;
    //       siteContent.main-content._________-content;
    //         TOP
    //           features
    //           about
    //         BOTTOM
    //           services
    //           product
    //           vision

    //   src = siteContent.images.middle-img
    
    // siteContent.contact.contact-h4
    // siteContent.contact.address
    // siteContent.contact.phone
    // siteContent.contact.email
    
    // class="bold"
    // siteContent.footer.copyright