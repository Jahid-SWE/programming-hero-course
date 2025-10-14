
import { Link } from 'react-router';

const FComment = ({comment}) => {
    const {id, name,body}=comment;
  return (
    <div style={{borderRadius:'20px',border:'1px solid yellow', margin:'10px', padding:'30px'}}>
        <p> name: {name}</p>
        <p> Body: {body}</p>
        <Link to={`/fcomments/${id}`}>
            <button>Show Comment </button>
        </Link>
    </div>
  )
}

export default FComment