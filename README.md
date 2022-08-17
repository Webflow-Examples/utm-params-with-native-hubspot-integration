# UTM-params-with-native-hubspot-integration

Automatically send UTM parameters with form submissions when using the native Hubspot integration.

Example site below with details:

https://utm-params-with-hubspot.webflow.io/

# How it works

The form we create in Hubspot must mirror our form in Webflow. For example, if we have 5 inputs in Hubspot, we should have 5 inputs in our Webflow form.

When creating the form in Hubspot, we need to consider the number of UTM parameters we expect and create the same number of inputs. For example, for the URL below:

`mydomain.com/?utm_source=newsletter&utm_medium=email&utm_campaign=spring_sale`

We would need three inputs in Hubspot for each of the UTM parameters — utm_source, utm_medium, and utm_campaign. The UTM inputs are in addition to standard form inputs — i.e., name, email, etc.

In Webflow, use the custom code embed element to add a hidden input inside our form block before the submit button. We need our main input fields plus hidden inputs for each of the UTM parameters. Each hidden input should have two attributes — `name` and `hidden`. Example below.

`<input name="the-utm-name" hidden />`

Continuing with our example, we should have three hidden inputs and the name attribute value on each input should be identical to the UTM parameter key from our URL. Examples below.

`<input name="utm_source" hidden />`

`<input name="utm_medium" hidden />`

`<input name="utm_campaign" hidden />`

The name attribute on the form will allow us to select these inputs during the form fields mapping step when connecting the Webflow form to the corresponding Hubspot form.

# The Javascript

The script will look for the inputs with the same UTM key — i.e., `utm_medium` — and assign it relevant value.

```js
// get url parameters
const urlParams = new URLSearchParams(window.location.search);

// iterate through parameters and assign to corresponding input
for (const [key, value] of urlParams) {
  document.querySelector(`input[name="${key}"]`).value = value;
}
```
