export async function handler(event) {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Rota de SignIn",
        input: event,
      },
      null,
      2
    ),
  };
};
