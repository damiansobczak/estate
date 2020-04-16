import React from "react";

class EmptyFavorite extends React.Component {
    render() {
        return (
            <div className="favorite__empty columns">
                <div className="column">
                    <span className="icon-x-circle"></span>
                    <h2>Upss.</h2>
                    <p>Aktualnie nie masz żadnych zapisanych ofert.</p>
                </div>
            </div>
        );
    }
}

export default EmptyFavorite;