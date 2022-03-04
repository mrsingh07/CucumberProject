package com.runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Features", 
				 glue= {"com.stepDefinition"}, 
				 monochrome=true,
				 plugin= {"html:Reports\\HtmlReport", "json:Reports\\JsonReport\\cucumber.json", "junit:Reports\\JunitReport\\cucumber.xml"},
				 dryRun=false,	//Mapping between feature file and step file
				 strict=true	//It will check if any step is not defined in the step definition file
				)
public class Runner {

}
