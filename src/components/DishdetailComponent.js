import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props) {
        super(props);
    }
    
    renderComments(comments){
        if (comments != null){
            const commentsComponent = comments.map((comment)=>{
                return (
                    <ul className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>-- {comment.author}, {comment.date}</li>
                    </ul>
                );
            });
            return (
                <div>
                    {commentsComponent}
                </div>
            )
        }
        else //#endregion
            return (
                <div></div>
            )
    }

    renderDish(dish){
        if (dish != null)
        {
            const commentDiv = this.renderComments(this.props.dish.comments);
            return (
                <div className="row">
                    <div className = "col-12 col-md-5 m-1">
                        <Card >
                            <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comment</h4>
                        { commentDiv }
                    </div>
                </div>
            );
        }
        else //#endregion
            return (
                <div></div>
            );
    }

    render(){
        return this.renderDish(this.props.dish);
    }
}

export default DishDetail;