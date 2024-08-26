import React, { useState } from "react";
import fetchData from "../services/fetchData";
import "../App.css"; // Import the CSS file

const SelectionView = () => {
    const [formData, setFormData] = useState({
        question: "",
        folder: "",
        numDocs: "",
    });
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const apiResponse = await fetchData(
                "https://api.example.com/submit",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            // const result = await apiResponse.json();
            console.log("Form submitted successfully:", apiResponse);
            setResponse(apiResponse);
        } catch (error) {
            console.error("Error submitting form:", error);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="input-section">
                        <div className="input-field">
                            <label htmlFor="question">Question</label>
                            <input
                                id="question"
                                type="text"
                                name="question"
                                value={formData.question}
                                placeholder="Enter your question"
                                onChange={handleChange}
                                className="custom-input"
                            />
                        </div>

                        <div className="input-field">
                            <label htmlFor="folder">Select Client folder</label>
                            <select
                                id="folder"
                                name="folder"
                                value={formData.folder}
                                onChange={handleChange}
                                className="custom-select"
                            >
                                <option value="default-folder">
                                    Default folder
                                </option>
                            </select>
                        </div>

                        <div className="input-field">
                            <label htmlFor="numDocs">
                                Select Number of documents
                            </label>
                            <select
                                id="numDocs"
                                name="numDocs"
                                value={formData.numDocs}
                                onChange={handleChange}
                                className="custom-select"
                            >
                                {[...Array(10)].map((_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="submit-section">
                        <button className="submit-button" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            {response && (
                <div className="response-section">
                    <div className="doc-response">
                        <h3>
                            <u>Docs retrieved:</u>
                        </h3>
                        {isError ? (
                            <p>There was an error retrieving the documents.</p>
                        ) : isLoading ? (
                            <p>Loading documents...</p>
                        ) : response.docs.length === 0 ? (
                            <p>No documents found for the selected folder.</p>
                        ) : (
                            response.docs.map((doc) => (
                                <div className="doc">
                                    <h2>{doc.snippet}</h2>
                                    <div key={doc.id} className="doc-info">
                                        {doc.filePath && (
                                            <h4>File path: {doc.filePath}</h4>
                                        )}
                                        {doc.batesNumber && (
                                            <h4>
                                                Bates number: {doc.batesNumber}
                                            </h4>
                                        )}
                                        {doc.pageNumber && (
                                            <h4>
                                                Page number: {doc.pageNumber}
                                            </h4>
                                        )}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="answer-response">
                        <h3>
                            <u>GPT Answer:</u>
                        </h3>
                        <p>{response.gptAnswer}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SelectionView;
