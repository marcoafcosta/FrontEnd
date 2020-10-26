import React from "react";
import "./styles.css";



export default class ImageComponent extends React.Component {
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("cliked");
  };

  render() {
    return (
      <div>
        <img
          className="small"
          src={this.props.imagePath}
          onClick={this.handleShowDialog}
          alt=""
        />
        {this.state.isOpen && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open
            onClick={this.handleShowDialog}
          >
            <img
              className="image"
              src={this.props.imagePath}
              onClick={this.handleShowDialog}
              alt=""
            />
          </dialog>
        )}
      </div>
    );
  }
}