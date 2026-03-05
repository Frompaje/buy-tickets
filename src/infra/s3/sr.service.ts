import { Injectable } from '@nestjs/common';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { randomBytes } from 'crypto';
import { extname } from 'path';

@Injectable()
export class S3Service {
  private readonly client: S3Client;
  private readonly bucket: string;
  private readonly baseUrl: string;

  constructor() {
    this.client = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
      },
    });

    this.bucket = process.env.AWS_S3_BUCKET as string;
    this.baseUrl =
      process.env.AWS_S3_PUBLIC_URL ||
      `https://${this.bucket}.s3.${process.env.AWS_REGION}.amazonaws.com`;
  }

  async uploadEventImage(file: Express.Multer.File): Promise<string> {
    const randomName = randomBytes(16).toString('hex');
    const ext = extname(file.originalname);
    const key = `events/${randomName}${ext}`;

    await this.client.send(
      new PutObjectCommand({
        Bucket: this.bucket,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
      }),
    );

    return `${this.baseUrl}/${key}`;
  }
}
