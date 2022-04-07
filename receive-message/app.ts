import { APIGatewayProxyResult, SQSEvent } from 'aws-lambda';
import { SQS } from 'aws-sdk';

export const lambdaHandler = async (event: SQSEvent): Promise<APIGatewayProxyResult> => {
    try {
        const sqs = new SQS();
        const params: SQS.ReceiveMessageRequest = {
            MaxNumberOfMessages: 10,
            MessageAttributeNames: ['All'],
            VisibilityTimeout: 20,
            QueueUrl: process.env.QUEUE_URL as string,
            WaitTimeSeconds: 5,
        };

        const data = await sqs.receiveMessage(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(data.Messages),
        };
    } catch (error) {
        console.log(error);
        return {
            statusCode: 400,
            body: 'Ocorreu um erro ao processar solicitação',
        };
    }
};
