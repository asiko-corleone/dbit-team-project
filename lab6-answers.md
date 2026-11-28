1. PHP re-checks the member number on the server because browser checks can be bypassed by turning off JavaScript or sending form data directly

2. issd defines the data types in the order they are bound. $farmer['farmer_id'] is an integer, $date is a string, $session is a string and $litres is a decimal double.

3. Delete utilises a POST form so that data is not deleted when a link or crawler sends a GET request; data can only be deleted if someone intentionally presses the submit button. Edit however is accessed via a link as viewing/editing a form is merely for data retrieval.

4. Entering ' OR '1'='1 in the date field does not show any deliveries. As the query has already been defined, the ' OR '1'='1 is bound as literal data. MySQL therefore searches for an exact date match for this string and does not analyse the SQL conditional statements.