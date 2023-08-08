import { Request, Response } from 'express';
import httpStatus from 'http-status';
import axios from 'axios';

const getImage = async (req: Request, res: Response) => {
  try {
    let imageURL = req.params.image;
    imageURL =
      'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-xCICeBcjmKHkR2vvY2kadKmvSR7lnoDhqz5t7gL3mRTKitLHBtuAHuxQe-ICZfwxSiFYohdHcH9shA5iMmiQYmQVjF=w1365-h970';
    console.log('ImageURL', imageURL);
    let image: any = await axios.get(imageURL, {
      responseType: 'arraybuffer',
      headers: {
        Accept: 'media',
        cors: 'no-cors',
        origin: 'local',
      },
    });
    console.log(image);
    const { data } = image;
    console.log('UInt8Array', data);
    image = image.data;
    // image = new Uint8Array(image);
    res.status(httpStatus.OK);
    res.send(image);
  } catch (e) {
    console.log(e);
    res.status(httpStatus.INTERNAL_SERVER_ERROR);
    res.send(e);
  }
};

export { getImage };
