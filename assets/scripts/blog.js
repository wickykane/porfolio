'use strict';
const e = React.createElement;

class BlogComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: []
     };
  }

  componentDidMount() {
    this.getListPost();
  }

  getListPost() {
    axios("http://localhost:3000/v1/medium/blog?username=skyshidigital").then((res) => {
    this.setState({
      post: res.data.payload.posts
    })
    });
  }

  render() {
    const posts = this.state.post.map(item => (
      <div className="test" key={item.id}>
        This is TEst
      </div>
    ));
    return(
      posts
    );
  }
}

const domContainer = document.querySelector('#blog-container');
ReactDOM.render(e(BlogComponent), domContainer);