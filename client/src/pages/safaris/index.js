const Safaris = ({ safaris }) => {
  console.log(safaris);

  return (
    <div className="h-screen bg-no-repeat bg-center" style={{ backgroundImage: 'url(/serengeti.jpg)' }}>
    <div className="h-full w-full bg-black bg-opacity-50"></div>



    </div>
  );
};

export default Safaris;

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/safaris');
  const safaris = await res.json();

  return {
    props: { safaris },
  };
}
