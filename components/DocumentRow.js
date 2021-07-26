import React from "react";
import { useRouter } from "next/router";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import DescriptionIcon from "@material-ui/icons/Description";
import db from "../firebase";

const DocumentRow = ({ doc, session }) => {
  const router = useRouter();

  const DeleteDoc = () => {
    db.collection("userDocs")
      .doc(session?.user.email)
      .collection("docs")
      .doc(doc?.id)
      .delete()
      .then(() => {
        alert("Document successfully deleted!");
      })
      .catch((error) => {
        alert("Error removing document: ", error);
      });
  };

  return (
    <div className="flex items-center border mb-2 rounded-lg">
      <div
        onClick={() => router.push(`/doc/${doc?.id}`)}
        className="flex items-center flex-grow p-4 hover:bg-gray-100 rounded-lg text-gray-700 cursor-pointer text-sm "
      >
        <DescriptionIcon className="text-blue-500" />
        <p className="flex-grow ml-5 w-10 mr-10 text-lg">{doc?.fileName}</p>
        <p className="mr-6 text-lg text-gray-500">
          {doc?.timestamp?.toDate().toLocaleDateString()}
        </p>
      </div>
      <IconButton
        aria-label="delete"
        color="secondary"
        onClick={() => DeleteDoc()}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default DocumentRow;
