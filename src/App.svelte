<script>
  import { onMount } from "svelte";
  import axios from "axios";

  import Progress from "./components/Progress.svelte";
  import Item from "./components/Item.svelte";
  import { parsePercentageString } from "./utils/parse";

  $: psi = 0;
  $: dt = undefined;
  $: ht = undefined;

  $: cands = [];

  async function fetchData() {
    const { data } = await axios.get(
      "https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json"
    );

    psi = parsePercentageString(data.psi);

    cands = data.cand;
    dt = data.dt;
    ht = data.ht;
  }

  onMount(function () {
    const interval = setInterval(() => {
      fetchData();
    }, 30000);

    return () => clearInterval(interval);
  });

  fetchData();
</script>

<main class="container">
  <div>
    <span>Atualizado: {dt} {ht}</span>
  </div>

  <div>
    <Progress value={psi} />
  </div>

  <div class="list">
    <div class="winning">
      {#if cands[0]}
        <Item
          name={cands[0].nm}
          count={Number(cands[0].vap)}
          percentage={parsePercentageString(cands[0].pvap)}
        />
      {/if}
    </div>

    {#each cands as cand, index}
      {#if index > 0}
        <Item
          name={cand.nm}
          count={Number(cand.vap)}
          percentage={parsePercentageString(cand.pvap)}
        />
      {/if}
    {/each}
  </div>
</main>

<style>
  .container {
    width: 100%;
    height: 100%;
  }

  .list {
    margin-top: 64px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 16px 16px;
    grid-template-areas:
      "winning winning"
      ". ."
      ". .";
  }

  .winning {
    grid-area: winning;
  }
</style>
