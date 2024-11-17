  /*******************************************************************************
   * Problem 8, Part 1: generate license text and link from license code.
   *
   * Images, videos, and other resources on the web are governed by copyright.
   * Everything you find on the web is copyright to its creator automatically, and
   * you cannot reuse it unless you are granted a license to do so.
   *
   * Different licenses exist to allow creators to share their work. For example,
   * the Creative Commons licenses are a popular way to allow people to reuse
   * copyright material, see https://creativecommons.org/licenses/.
   *
   * Below is a list of license codes, and the associated license text explaining the code:
   *
   * CC-BY: Creative Commons Attribution License
   * CC-BY-NC: Creative Commons Attribution-NonCommercial License
   * CC-BY-SA: Creative Commons Attribution-ShareAlike License
   * CC-BY-ND: Creative Commons Attribution-NoDerivs License
   * CC-BY-NC-SA: Creative Commons Attribution-NonCommercial-ShareAlike License
   * CC-BY-NC-ND: Creative Commons Attribution-NonCommercial-NoDerivs License
   *
   * NOTE: any other licenseCode should use the URL https://choosealicense.com/no-permission/
   * and the explanation text, "All Rights Reserved"
   *
   * Write a function, generateLicenseLink(), which takes a license code, and returns
   * an HTML link to the appropriate license URL, and including the explanation text.
   *
   * For example:
   *
   * generateLicenseLink('CC-BY-NC') should return the following HTML string:
   *
   * '<a href="https://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial License</a>'
   * 
   *
   * The URL is generated based on the license code:
   *
   * - remove the `CC-` prefix
   * - convert to lower case
   * - place formatted license code within URL https://creativecommons.org/licenses/[...here]/4.0/
   *
   * Your generateLicenseLink() function should also accept an optional second argument,
   * `targetBlank`.  If `targetBlank` is true, add `target="_blank"` to your link
   * so that the URL opens in a blank tab/window.
   *
   * You can read more about HTML links at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
   *
   ******************************************************************************/
  
  const licenses = [
    { license: "CC-BY", descr: "Creative Commons Attribution License" },
    { license: "CC-BY-NC", descr: "Creative Commons Attribution-NonCommercial License" },
    { license: "CC-BY-SA", descr: "Creative Commons Attribution-ShareAlike License" },
    { license: "CC-BY-ND", descr: "Creative Commons Attribution-NoDerivs License" },
    { license: "CC-BY-NC-SA", descr: "Creative Commons Attribution-NonCommercial-ShareAlike License" },
    { license: "CC-BY-NC-ND", descr: "Creative Commons Attribution-NonCommercial-NoDerivs License" },
  ];

  function generateLicenseLink(licenseCode=String, targetBlank=false) {

    let url = getlicenseURL(licenseCode);
    let description = getDescriptionByLicense(licenseCode);
    let target = targetBlank ? `target="_blank"` : '';

    let html =  `<a href="${url}">${description}${target}</a>`;

    return html
  }


  function getlicenseURL(licenseCode){
    const result = licenses.find(item => item.license === licenseCode);
    const code = result ? licenseCode.replace("CC-", "") : "default";
    const defaultURL = "https://choosealicense.com/no-permission/";

    let url = (code=="default") ? defaultURL : `https://creativecommons.org/licenses/${code}/4.0/`;
    return url
  }


  function getDescriptionByLicense(licenseKey) {
    const result = licenses.find(item => item.license === licenseKey);
    return result ? result.descr : "All Rights Reserved"; // Return the description or null if not found
  }

  console.log(generateLicenseLink('CC-BY'))