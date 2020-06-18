import React from "react";

const FormAddBook = () => {
    return (
        <div>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">From</label>
                </div>
                <div className="field-body is-normal">
                    <div className="field">
                        <p className="control">
                            <input className="input" type="email" value="me@example.com" readOnly />
                        </p>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">To</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control">
                            <input className="input" type="email" placeholder="Recipient email" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormAddBook;
