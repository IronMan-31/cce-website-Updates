import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "../../components/ui/table";

// note to self: remove stuff you don't need

const MOUsTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>All MOUs with CCE, IIT Mandi.</TableCaption>
        <TableBody>
          <TableRow>
            <TableCell className="font-bold text-base  text-right">1</TableCell>
            <TableCell>MoU between IIT Mandi and HPKVN</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base  text-right">2</TableCell>
            <TableCell>
              MoU between IIT Mandi and DTE (Directorate of Technical Education,
              Vocational & Industrial Training, H.P. Sundernagar)
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base  text-right">3</TableCell>
            <TableCell>
              MoU between IIT Mandi and SCERT (State Council of Education
              Research & Training, New Delhi, India)
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base  text-right">4</TableCell>
            <TableCell>
              MoU between IIT Mandi and NSDC (National Skill Development
              Corporation)
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold text-base  text-right">5</TableCell>
            <TableCell>MoU between IIT Mandi and UPSDM</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default MOUsTable;
