
<a name="readme-top"></a>

<!-- PROJECT LOGO -->

  <h3 align="center">Workday Schedule</h3>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

![startscreen](https://user-images.githubusercontent.com/76407605/213609579-9e7b382c-d750-40c7-9770-674092d07da1.JPG)

As a full-stack web developer, I have developed a timed coding quiz application that features multiple-choice questions. This application runs in the browser, and is powered by dynamic HTML, CSS and JavaScript code. The user interface is clean, polished and responsive. This application was designed to help users become familiar with coding assessments and to apply the skills learned in the module.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This application helps employees with busy schedules to keep track of important events, allowing them to effectively manage their time. According to the project's acceptance criteria and provided mock-up, the app includes the following features:
-When the user opens the planner, the current day is displayed at the top of the calendar and uses a date library to work with date and time
-When the user scrolls down, they see timeblocks for standard business hours
-Each timeblock is color-coded to indicate whether it is in the past, present, or future. Past events are gray, present events are red, and future events are green
-Users can click into a timeblock to enter an event and click the save button to save the event in local storage
-When the page is refreshed, saved events persist
-Users can edit timeblock entry fields and use the clear button to clear all contents and local storage.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage
![startscreen](https://user-images.githubusercontent.com/76407605/213609579-9e7b382c-d750-40c7-9770-674092d07da1.JPG)
![questions](https://user-images.githubusercontent.com/76407605/213609587-f0eb553b-c5d0-4de1-8eff-6f0eb5227166.JPG)
![alldone](https://user-images.githubusercontent.com/76407605/213609597-068cae89-d3c9-4da5-9284-3c2e0a0059e6.JPG)
![highscores](https://user-images.githubusercontent.com/76407605/213609603-4ee92526-2139-47e9-b88e-ba97a1c61045.JPG)
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Current day is displayed at the top of the calendar
- [x] Presented with timeblocks for standard business hours
- [x] Each timeblock is color coded to indicate whether it is in the past, present, or future
- [x] Can enter an event into the timeblock
- [x] Text for that event is saved in local storage
- [x] The saved event remains when the page is refreshed


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Cassie LeClair - cassieleclair71@gmail.com

* Deployed Website: [https://cleclair71.github.io/05-workday-calendar/](https://cleclair71.github.io/05-workday-calendar/)
* Repository Link: [https://github.com/cleclair71/05-workday-calendar](https://github.com/cleclair71/05-workday-calendar)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [README Template](https://github.com/othneildrew/Best-README-Template)
* [Spacing](https://getbootstrap.com/docs/4.0/utilities/spacing/)
* [Format](https://day.js.org/docs/en/display/format)
* [Bootstrap layout](https://getbootstrap.com/docs/5.0/layout/utilities/)
* [jQuery API](https://api.jquery.com/)
* [Document.getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
* [Logical AND (&&)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
* [return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
* [15 Gorgeous CSS Text Animation Effects](https://alvarotrigo.com/blog/css-text-animations/)
* [FLEXBOX STICKY FOOTER](https://startbootstrap.com/snippets/sticky-footer-flexbox)
* [Bootstrap Video Background](https://jsfiddle.net/StartBootstrap/enajc82d/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```