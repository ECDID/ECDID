Testing Software
================

Tests are used in software to make sure that the quality is up to snuff.  There are many different ways that software can be tested, and this research documents several of them.  Agile in particular adheres to Test Driven Development (TDD).

## Different Scopes of Testing
* Unit Testing (testing individual pieces of code, usually functions)
   * (Mark's Note: this is what we will most likely be doing the most of)
* Integration Testing (testing how multiple pieces of code interact)
* System Testing (testing entire systems at once)

## Test Driven Development Model
1. User stories arrive from the client
2. Developers turn these storie requirements into tests
3. Run a test cycle and find failing tests
4. Write just enough code to make failing tests pass
5. Refactor or refine the tests and code, ensuring that all tests continue to pass

## Individual Test Lifecycle
1. Setup
    * Create the unit to be tested and prepare it for testing
2. Execution
    * Cause the unit to execute the desired function to be tested, passing in inputs and handling outputs as necessary
    * Sometimes, directly monitoring unit properties is necessary
3. Validation
    * Validate that the returned data conforms to the desired output
4. Cleanup
    * Return the unit to a state where it can potentially be reused by other tests

## Best Practices
* Seperate common setup and cleanup functions
* Treat test code as equal value to production code
* Ensure all developers avoid bad practices and write quality tests

## Bad Practices
* Having test cases that depend on the results of other test cases
* Having very slow tests
* Testing implementation details rather than whether the output is as expected

## TDD Varients

### Behavioral Driven Development
* Instead of user stories written in haphazard english, tests are presented using a very specific syntactical subset of English
* Some tools parse these English phrases directly in order to run tests, removing the need to code specific tests
* Tests are described using phrases such as `When I do X, then Y should happen` or `When I do X, then Y should look like Z`

### Continues Test Driven Development
* Tests are run automatically as code is written and saved to disk
* The developer does not need to stop their workflow to run the test suite
* Instead, as specific pieces of code are updated, they are tested automatically and continuously

