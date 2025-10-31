import GenericBody from '../GenericBody/GenericBody'

type HomeProps = {
  onNavigate: (newPage: "home" | "produtos" | "checkout") => void;
};

const Home = ({onNavigate}:HomeProps) => {
  return (
    <GenericBody positionButton='flex-start' onButtonClick={() => onNavigate("produtos")}>
        <div>Home</div>
    </GenericBody>
    
  )
}

export default Home