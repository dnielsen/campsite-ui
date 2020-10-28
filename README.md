## How to run
Prerequisites:
- Node.js 12
- Yarn (`npm install -g yarn`)

1. Install the dependencies
    ```
    yarn install
    ```

2. Run the development server
    ```
    yarn dev
    ```
Now your app is available at `http://localhost:3000`. Keep in mind that you should have the server (or services) running for the
 app to work appropriately.

## How to deploy (Amazon S3)

2. Build the app
    ```
    REACT_APP_BASE_API_URL=http://urlToYourDeployedCampsiteApi.com:port yarn build
    ```
3. Go to `https://aws.amazon.com/console/` and sign in.
4. Click Services (in the upper top corner) and choose S3.
5. Click Create bucket
6. In Bucket name field enter your bucket name, for example `campsite-ui`. You can change the region if you want
. Click next.
7. Click Next.
8. Uncheck Block all public access and check I acknowledge that .... Click next.
9. Click Create bucket
10. Click on the created bucket's link (in our case it's `campsite-ui`).
11. Click Upload
12. Open the `build` directory we've created during the 2nd step, which is in `packages/ui/build`
13. Drag all the files from the `build` directory onto the Upload page and click Upload.  
14. Click Properties.
15. Click Static website hosting box.
16. Check Use this bucket to host a website, type index.html into the index.html placeholder and click save.
17. Click Overview, select all the files by clicking the first box, click Actions and then Make public, and click the
 Make public button.

Your `ui` page has been deployed! Now you can click the `index.html` link, and there's a field Object URL
 with
 the
 link to your website (in our case it's `https://campsite-ui.s3.eu-central-1.amazonaws.com/index.html`). Click it and
  see your results! Remember, we gotta have the backend running as
  well for the
  application to run properly.
