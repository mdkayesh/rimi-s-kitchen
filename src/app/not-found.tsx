import Button from "./_conponents/Button";

const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-center text-3xl">404 page not found!</h2>

      <Button tag="link" href={"/"} btnClass="mt-4">
        Back to Home
      </Button>
    </main>
  );
};

export default NotFound;
