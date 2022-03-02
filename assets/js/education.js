AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "PostgreSQL & Google BigQuery",
    cardImage: "assets/images/education/udemy.svg",
    moocLink: "https://www.udemy.com/course/google-bigquery-and-postgresql-sql-for-data-analysis/",
  },
  {
    title: "People Analytics",
    cardImage: "assets/images/education/udemy.svg",
    moocLink: "https://www.udemy.com/course/hr-analytics-using-excel/",
  },
  {
    title: "Google Data Studio",
    cardImage: "assets/images/education/udemy.svg",
    moocLink: "https://www.udemy.com/course/google-data-studio-by-starttech/",
  },
  {
    title: "Data Wrangling in R",
    cardImage: "assets/images/education/linkedin.svg",
    moocLink: "https://www.linkedin.com/learning/data-wrangling-in-r-14135737",
  },
  {
    title: "Advanced SQL - Window Functions",
    cardImage: "assets/images/education/linkedin.svg",
    moocLink: "https://www.linkedin.com/learning/advanced-sql-window-functions",
  },
  {
    title: "Advanced SQL",
    cardImage: "assets/images/education/linkedin.svg",
    moocLink: "https://www.linkedin.com/learning/advanced-sql-for-data-scientists-13972889",
  },
  {
    title: "Power BI with DAX",
    cardImage: "assets/images/education/linkedin.svg",
    moocLink: "https://www.linkedin.com/learning/power-bi-data-modeling-with-dax",
  },
  {
    title: "Inference & Modeling",
    cardImage: "assets/images/education/edx.svg",
    moocLink: "https://www.edx.org/course/data-science-inference-and-modeling",
  },
];

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/*----- Timeline Section -----*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
