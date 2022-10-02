<script>
  import { parsePercentageNumber } from "../utils/parse";
  export let name, percentage, count;
</script>

<div class="container">
  <h1 class="name">{name}</h1>
  <p class="percentage">
    {parsePercentageNumber(percentage)}%
    <span class="count">({count.toLocaleString("pt-BR")})</span>
  </p>
</div>

<style>
  .container {
    background-color: #333;
    padding: 16px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
  }

  .name {
    font-weight: bold;
    font-size: 1.2rem;
  }

  .percentage {
    font-size: 1rem;
    font-weight: bold;
  }

  .count {
    font-size: 0.8rem;
    color: #bababa;
  }
</style>
