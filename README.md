# accordion
Create an accordion dynamically using JavaScript. 

# Details

I am creating an accordion using JavaScript where everything is in run time. Like

1. I am using a static Array of object for the content of accordion
2. Using createElement to create the element dynamically
3. adding run time css


We can create accordion using multiple ways like -
   a. Using vanilla JS
   b. using custom web component
   
# develop branch

In develop branch, I am using only vanilla js to create an accordion. 

But 

# custom-accordion

In custom-accordion branch, I have created accordion by using custom web component. So that anyone can simply plug and play with it. like -

<mycustom-accordion .content="dataSets"></mycustom-accordion>

This custom web component needs only a set of data as the content of accordion in the following format like -

where dataSets look like - 

const dataSets = [
  {
    'countryName': "dummy text"
    'details': "dummy details"
  }]


