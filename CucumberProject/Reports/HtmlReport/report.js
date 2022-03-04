$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/TagsDemo.feature");
formatter.feature({
  "name": "Using of tags in Cucumber",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "name": "Scenario1",
  "description": "    Given: This is Scenario1",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.scenario({
  "name": "Scenario2",
  "description": "    Given: This is Scenario2",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.scenario({
  "name": "Scenario3",
  "description": "    Given: This is Scenario3",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SanityTest"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.scenario({
  "name": "Scenario4",
  "description": "    Given: This is Scenario4",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "name": "Scenario5",
  "description": "    Given: This is Scenario5",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "name": "Scenario6",
  "description": "    Given: This is Scenario6",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
});