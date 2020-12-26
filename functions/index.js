const functions = require('firebase-functions');
const Busboy = require('busboy');
const os = require('os');
const fs = require('fs');
const path = require('path');
const cors = require('cors')({ origin: '*' });

// const gcs, { Storage } = require('@google-cloud/storage');
// const gcs = require('@google-cloud/storage');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// const storage = new Storage();

// async function createBucket() {
//     await storage.createBucket(bucketName);
//     console.log(`${bucketName} created!`);
// }
// createBucket().catch(console.error);

const bucketName = 'oba-bucket';
const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function uploadFile() {
    // Uploads a local file to the bucket
    await storage.bucket(bucketName).upload(filename = path.join(__dirname, 'design.jpg'), {
      // Support for HTTP requests made with `Accept-Encoding: gzip`
      gzip: true,
      // By setting the option `destination`, you can change the name of the
      // object you are uploading to a bucket.
      metadata: {
        // Enable long-lived HTTP caching headers
        // Use only if the contents of the file will never change
        // (If the contents will change, use cacheControl: 'no-cache')
        cacheControl: 'public, max-age=31536000',
      },
    });

    console.log(`${filename} uploaded to ${bucketName}.`);
  }

  
//   exports.upload = functions.https.onRequest(async(req, res) => {
//       console.log('Upload endpoint running!');
//       const response = await uploadFile().catch(console.error);
//     res.send({ 
//         response,
//         message: 'Image uploaded successfully!!!'});
// });

exports.cozaApi = functions.https.onRequest((req, res) => {
    console.log('cozaApi endpoint running!');
    res.send({message: 'Welcome to COZA!'});
});

exports.cozaUpload = functions.https.onRequest((req, res) => {
    cors(req, res, () => {

        console.log('cozaUpload endpoint running (Uploading Images)!');
        if (req.method === 'POST') {
            console.log('POST Images to COZA!');
        const busboy = new Busboy({ headers: req.headers });
        let uploadObj = null;
        
        busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
            const filePath = path.join(os.tmpdir(), filename);
            uploadObj = { 
                name: `oba${filename}`,
                file: filePath, 
                type: mimetype 
            };
            file.pipe(fs.createWriteStream(filePath));
        });
        busboy.on('finish', () => {
            console.log('Images uploaded to COZA!');
            try {
                const bucket = storage.bucket('oba-dce9d.appspot.com');
                bucket.upload(uploadObj.file, {
                    name: uploadObj.name,
                    uploadType: 'media',
                    metadata: {
                        metadata: {
                            contentType: uploadObj.type
                        }
                    }
                })
                .then(() => {
                    res.status(200).json({
                        message: 'It worked'
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        error: err
                    });
                });
            } catch(e) {
                console.error(e);
            }
        });
        busboy.end(req.rawBody);    
    } else {
        console.log('HTTP POST method required for image upload!');
        res.status(200).json({
            message: 'HTTP POST method required for image upload!'
        });
    }
});
});