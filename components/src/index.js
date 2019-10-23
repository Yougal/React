import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import Faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App=()=>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam"  timeAgo="Today at 4:45PM" imgSrc={Faker.image.avatar()} comments="Nice Blog Post-1"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Today at 3:15PM" imgSrc={Faker.image.avatar()} comments="Nice Blog Post-2"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="John" timeAgo="Today at 2:40PM" imgSrc={Faker.image.avatar()} comments="Nice Blog Post-3"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Erin" timeAgo="Today at 11:45PM" imgSrc={Faker.image.avatar()} comments="Nice Blog Post-4"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 9:45PM" imgSrc={Faker.image.avatar()} comments="Nice Blog Post-5"/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));