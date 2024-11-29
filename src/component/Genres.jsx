import Form from 'react-bootstrap/Form';

function Genres() {
  return (
    <Form.Select aria-label="Default select example">
        <h1>TV Shows</h1>
        <option>Genres</option>
        <option value="1">Horror</option>
        <option value="2">Comedy</option>
        <option value="3">Fantasy</option>
    </Form.Select>
  );
}

export default Genres;