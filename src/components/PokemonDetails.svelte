<script>
  import {
    Table,
    TableBody,
    TableBodyRow,
    TableBodyCell,
  } from "flowbite-svelte";

  export /**
   * @type {{ id: any; types: { type: { name: any; }; }[]; abilities: { ability: { name: any; }; }[]; weight: any; height: any; base_experience: any; }}
   */
  let details;
</script>

<div class="mt-4 rounded-sm w-full capitalize">
  <Table striped={true}>
    <TableBody class="text-center divide-y">
      <TableBodyRow>
        <TableBodyCell>ID</TableBodyCell>
        <TableBodyCell>{details.id}</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>types</TableBodyCell>
        <TableBodyCell>
          {details.types[0].type.name}
          {#if details.types[1]}
            / {details.types[1].type.name}
          {/if}
        </TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Abilities</TableBodyCell>
        <TableBodyCell
          >{details.abilities[0].ability.name} / {details.abilities[1].ability
            .name}</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Weight</TableBodyCell>
        <TableBodyCell>{details.weight}</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Height</TableBodyCell>
        <TableBodyCell>{details.height}</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Base Exp</TableBodyCell>
        <TableBodyCell>{details.base_experience}</TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>
</div>
