import { SQSEvent } from 'aws-lambda';

export const lambdaHandler = async (event: SQSEvent): Promise<void> => {
    event.Records.forEach((record) => {
        console.log(record);
    });

    // Recebimento de mensagem via chamada http
    // const sqs = new SQS();
    // const params: SQS.ReceiveMessageRequest = {
    //     MaxNumberOfMessages: 10,
    //     MessageAttributeNames: ['All'],
    //     VisibilityTimeout: 20,
    //     QueueUrl: process.env.QUEUE_URL as string,
    //     WaitTimeSeconds: 5,
    // };

    // const data = await sqs.receiveMessage(params).promise();

    // if (data.Messages)
    //     for await (const message of data.Messages) {
    //         if (message.ReceiptHandle)
    //             await sqs
    //                 .deleteMessage({
    //                     QueueUrl: process.env.QUEUE_URL as string,
    //                     ReceiptHandle: message.ReceiptHandle,
    //                 })
    //                 .promise();
    //     }

    // return {
    //     statusCode: 200,
    //     body: JSON.stringify(data.Messages),
    // };
};
