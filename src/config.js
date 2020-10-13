export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51HbbQoHn5HMWxn3xNB3HA68ITk22ea7eWjEiIB7gMPjfuSupGs6ZXMUgZi1fy9F31Ee5jHiVeY3wBAtk19j2yUSr00hMhA1y4P",
    s3: {
        REGION: "us-east-2",
        BUCKET: "notes-app-uploads-kanishka"
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://voy20b2e64.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_Goa7We2sN",
        APP_CLIENT_ID: "1v0g54q9b5ngm8rf82a3bvil61",
        IDENTITY_POOL_ID: "us-east-2:3666ba41-6bac-4279-bcb6-97e9658719f6"
    }
};