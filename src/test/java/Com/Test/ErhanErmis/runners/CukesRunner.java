package Com.Test.ErhanErmis.runners;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"json:target/cucumber.json",
                "html:target/default-html-reports",
                "rerun:target/rerun.txt"},
        features = "src/test/resources/features",
        glue = "Com/Test/ErhanErmis/step_definitions",
        dryRun = false,
        tags = "@api"
)
public class CukesRunner {
}
