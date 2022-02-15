# README

[![Netlify Status](https://api.netlify.com/api/v1/badges/ea7d842a-aa5e-4f6b-97a3-971ab084ae5c/deploy-status)](https://app.netlify.com/sites/v2lrefresh/deploys)

## Running the prototype locally

With Docker installed and running, open a Terminal at the root of the codebase and run:

`docker compose up`

After the system starts up, the prototype will be available at `[http://localhost:8080](http://localhost:8080)`

---

## .NET Export

You can create a [.NET export via GitHub Actions](https://github.com/MrSleeth/v2l-pattern-library/actions/workflows/dotnet-export.yml) or run it manually using the following command in your Terminal:

`docker run --rm -v $(pwd):/code -w /code --entrypoint ./dotnetexport.sh mrsleeth/v2l:multi`

## Full Documentation

[Full documentation](https://v2lrefresh.netlify.app/documentation/getting-started/) on how to use the system to build courses can be found at [https://v2lrefresh.netlify.app/documentation/getting-started/](https://v2lrefresh.netlify.app/documentation/getting-started/). 

Alternatively, if the system is running locally you can access the documentation at [http://localhost:8080/documentation/getting-started/](http://localhost:8080/documentation/getting-started/).

## Staging

Previewable Staging environment is available on Netlify — [https://staging--v2lrefresh.netlify.app](https://staging--v2lrefresh.netlify.app)