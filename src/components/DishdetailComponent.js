import React , {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem,
    Modal, ModalHeader, ModalBody , Button , Form, FormGroup, Label, Input
    } from 'reactstrap';
import { Link } from 'react-router-dom';


class CommentForm extends Component{

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
          };

        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.toggleModal         = this.toggleModal.bind(this);
    }

    handleCommentSubmit(event){
        this.toggleModal();
        event.preventDefault();
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }


    render(){
        return (
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleCommentSubmit}>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <Input type="select" name="select" id="rating">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>                                
                                </Input>
                            </FormGroup>                        
                            <FormGroup>
                                <Label htmlFor="username">Your Name</Label>
                                <Input type="text" id="username" name="username" placeholder="Your Name"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="comment">Commenrt</Label>
                                <Input type="textarea" name="text" id="comment" rows="5"/>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

function RenderDish({dish}) {

    if (dish != null)
    {
        return (
            <div className = "col-12 col-md-5 m-1">
                <Card >
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    else 
        return (
            <div></div>
        );

}

function RenderComments({comments}) {

    if (comments != null){
        const commentsComponent = comments.map((comment)=>{
            return (
                <ul className="list-unstyled">
                    <li>{comment.comment}</li>
                    <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                </ul>
            );
        });
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comment</h4>
                {commentsComponent}
                <CommentForm/>
            </div>
        )
    }
    else //#endregion
        return (
            <div></div>
        )

}

const  DishDetail = (props) => {

    if (props.dish != null ){
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <RenderDish dish={props.dish}/>
                    <RenderComments comments={props.comments}/>
                </div>
            </div>
        );
    }
    else{
        return (
            <div></div>
        );
    }

}

export default DishDetail;