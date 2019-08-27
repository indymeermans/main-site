

// images loader
var storage = firebase.app().storage("gs://portfolio-30e0d.appspot.com/").ref('portrait');
var storageNight = firebase.app().storage("gs://portfolio-30e0d.appspot.com/").ref('nightlife');
var storageTravel = firebase.app().storage("gs://portfolio-30e0d.appspot.com/").ref('travel');
var storageFest = firebase.app().storage("gs://portfolio-30e0d.appspot.com/").ref('festivals');



let grid = document.querySelector('#grid');
let clearfix = document.querySelector('#test');
// Now we get the references of these images

if (grid !== null){
storage.listAll().then(function(result) {
  result.items.forEach(function(imageRef) {
    // And finally display them
    imageRef.getDownloadURL().then(function(url) {
        // TODO: Display the image on the UI
       let code = `<div class="col-12 col-sm-6 col-lg-3 single_gallery_item  human mb-30 wow fadeInUp" data-wow-delay="300ms">
        <div class="single-portfolio-content">
            <img src="${url}" alt="">
            <div class="hover-content">
                <a href="${url}" class="portfolio-img">+</a>
            </div>
        </div>
    </div>`
   grid.insertAdjacentHTML('beforebegin', code);
   return url;
  });
});
}).catch(function(error) {
  // Handle any errors
});

storageNight.listAll().then(function(result) {
    result.items.forEach(function(imageRef) {
      // And finally display them
      imageRef.getDownloadURL().then(function(url) {
          // TODO: Display the image on the UI
         let code = `<div class="col-12 col-sm-6 col-lg-3 single_gallery_item  nature mb-30 wow fadeInUp" data-wow-delay="300ms">
          <div class="single-portfolio-content">
              <img src="${url}" alt="">
              <div class="hover-content">
                  <a href="${url}"  class="portfolio-img">+</a>
              </div>
          </div>
      </div>`
     grid.insertAdjacentHTML('beforebegin', code);

    });
  });
  }).catch(function(error) {
    // Handle any errors
  });

  storageTravel.listAll().then(function(result) {
    result.items.forEach(function(imageRef) {
      // And finally display them
      imageRef.getDownloadURL().then(function(url) {
          // TODO: Display the image on the UI
         let code = `<div class="col-12 col-sm-6 col-lg-3 single_gallery_item  country mb-30 wow fadeInUp" data-wow-delay="300ms">
          <div class="single-portfolio-content">
              <img src="${url}" alt="">
              <div class="hover-content">
                  <a href="${url}"  class="portfolio-img">+</a>
              </div>
          </div>
      </div>`
     grid.insertAdjacentHTML('beforebegin', code);

    });
  });
  }).catch(function(error) {
    // Handle any errors
  });

  storageFest.listAll().then(function(result) {
    result.items.forEach(function(imageRef) {
      // And finally display them
      imageRef.getDownloadURL().then(function(url) {
          // TODO: Display the image on the UI
         let code = `<div class="col-12 col-sm-6 col-lg-3 single_gallery_item video  mb-30 wow fadeInUp" data-wow-delay="300ms">
          <div class="single-portfolio-content">
              <img src="${url}" alt="">
              <div class="hover-content">
                  <a href="${url}"  class="portfolio-img">+</a>
              </div>
          </div>
      </div>`
     grid.insertAdjacentHTML('beforebegin', code);

    });
  });
  }).catch(function(error) {
    // Handle any errors
  });

}

let ageMe = document.getElementById("age");
// get age
 if( ageMe != null){
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
age.innerHTML = getAge("1998/09/21");
 }



  $(window).on('load', function () {
    var $grid = $('.alime-portfolio').isotope({
        itemSelector: '.single_gallery_item',
        percentPosition: true,
        masonry: {
            columnWidth: '.single_gallery_item'
        }
    });
    

  $('.alime-portfolio').imagesLoaded().progress(function () {
    // filter items on button click
  
    $grid.isotope({
        filter: '.human'
    });
   
    // init Isotope
     $('.portfolio-menu').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');

        $grid.isotope({
            filter: filterValue
        });
       
    });
   
   
});
});



let contactClas = document.getElementById('contact-area');
if (contactClas == null){
      $('.alime-portfolio').magnificPopup({

            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return '';
                }
            }

    });
}


$(window).on('load', function ()  {


var userFeed = new Instafeed({
    get: 'user',
    userId: '8048430538',
    clientId: '14d4aa005ed04ddfb6d227e56159343c',
    accessToken: '8048430538.14d4aa0.36dc04a3a3a346f091df7d779271634e',
    resolution: 'standard_resolution',
    template: ` <div class="single-instagram-item {{orientation}}">
    <img src="{{image}}" alt="">
    <div class="instagram-hover-content text-center d-flex align-items-center justify-content-center ">
        <a href="{{link}}">
            <i class="ti-instagram" aria-hidden="true"></i>
            <span>@indymeermans</span>
        </a>
    </div> </div>`,
    sortBy: 'most-recent',
    limit: 12,
    links: false,
    target: "instafeed-gallery-feed",
    after: function(){
        if (!this.hasNext()) {
            btnInstafeedLoad.setAttribute('disabled', 'disabled');
          }
          var instagramFeedSlider = $('.owl-carousel');

        $(document).ready(function() {
          
            instagramFeedSlider.owlCarousel({
                items: 10,
                loop: true,
                autoplay: true,
                smartSpeed: 1000,
                autoplayTimeout: 3000,
                responsive: {
                    0: {
                        items: 2
                    },
                    576: {
                        items: 3
                    },
                    768: {
                        items: 4
                    },
                    992: {
                        items: 5
                    },
                    1200: {
                        items: 6
                    }
                }
            })
        })
    
    }

  });
  userFeed.run();

  

});
