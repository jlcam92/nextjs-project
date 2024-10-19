import Header from "@/components/Header";
import { Editor } from "@/components/ui/editor/Editor";
import React from "react";

const Document = () => {
	return (
		<div>
			<Header>
				<p>Google docs clone</p>
			</Header>
			<Editor />
		</div>
	);
};

export default Document;
