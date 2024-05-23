import { Button } from "@/components/ui/button";
import { TableRow, TableCell, TableBody, Table } from "@/components/ui/table";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, X, Search } from "lucide-react";
import { OrderDetails } from "./order-detalis";

export function OrderTableRow() {
  return(
    <TableRow>
    <TableCell>
      <Dialog>
        <DialogTrigger asChild>
      <Button variant="outline" size="xs">
        <Search className="w-3 h-3"/>
        <span className="sr-only">Detalhes do pedido</span>
      </Button>
      </DialogTrigger>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Status</TableCell>
              <TableCell></TableCell>

            </TableRow>
          </TableBody>
        </Table>
      </div>
      
      <OrderDetails />


      </Dialog>
    </TableCell>
    <TableCell className="font-mono text-xs font-medium">32423dsdf3221</TableCell>
    <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
    <TableCell className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-slate-400" />
      <span className="font-medium text-muted-foreground">Pendente</span>
    </TableCell>
    <TableCell className="font-medium">Maiko Duarte</TableCell>
    <TableCell className="font-medium">R$149,90</TableCell>
    <TableCell>
      <Button variant="outline" size="xs">
      <ArrowRight className="h-3 w-3 mr-2" />
      Aprovar
      </Button>
      </TableCell>
      <TableCell>
      <Button variant="ghost" size="xs">
      <X className="h-3 w-3 mr-2" />
      Cancelar
      </Button>
      </TableCell>




  </TableRow>
  )
}