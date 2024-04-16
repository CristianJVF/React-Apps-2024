import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Page2 = () => {
    const { id } = useParams()
    return (
        < div >
            {id}
        </div >
    )
}

export default Page2;