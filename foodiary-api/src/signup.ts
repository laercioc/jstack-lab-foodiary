export async function handler(event) {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Rota de SignUp",
        input: event,
      },
      null,
      2
    ),
  };
};
