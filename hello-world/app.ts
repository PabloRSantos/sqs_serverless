import { APIGatewayProxyResult, SQSEvent } from 'aws-lambda';
import { SQS } from 'aws-sdk';

export const lambdaHandler = async (event: SQSEvent): Promise<APIGatewayProxyResult> => {
    try {
        const sqs = new SQS();
        const params = {
            DelaySeconds: 0,
            MessageAttributes: {
                nome: {
                    DataType: 'String',
                    StringValue: 'Pablo Rosa',
                },
            },
            MessageBody: 'Usuário para inserir na base',
            QueueUrl: process.env.QUEUE_URL as string,
        };

        const data = await sqs.sendMessage(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        console.log(error);
        return {
            statusCode: 400,
            body: 'Ocorreu um erro ao processar solicitação',
        };
    }
};
