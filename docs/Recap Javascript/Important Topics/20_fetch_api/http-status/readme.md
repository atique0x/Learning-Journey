# HTTP Status

| Code | Category     | Meaning               | Usage / Notes                                       |
| ---- | ------------ | --------------------- | --------------------------------------------------- |
| 200  | Success      | OK                    | Standard success for GET/POST requests.             |
| 201  | Success      | Created               | Resource successfully created (POST).               |
| 204  | Success      | No Content            | Request succeeded but no content returned (DELETE). |
| 400  | Client Error | Bad Request           | Invalid request syntax or parameters.               |
| 401  | Client Error | Unauthorized          | Authentication required (login needed).             |
| 403  | Client Error | Forbidden             | Authenticated but no permission.                    |
| 404  | Client Error | Not Found             | Requested resources do not exist (very common).     |
| 500  | Server Error | Internal Server Error | Generic server failure (most common server error).  |
| 502  | Server Error | Bad Gateway           | Invalid response from upstream server.              |
| 503  | Server Error | Service Unavailable   | Server overloaded or under maintenance.             |
| 504  | Server Error | Gateway Timeout       | The upstream server did not respond in time.        |
