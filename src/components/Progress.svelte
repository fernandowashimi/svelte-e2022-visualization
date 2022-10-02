<script>
  import { parsePercentageNumber } from "../utils/parse";

  export let value;
</script>

<div class="container">
  <label for="progressbar">Urnas apuradas:</label>
  <progress id="progressbar" {value} max="100">{value}</progress>
  <span>{parsePercentageNumber(value)}%</span>
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;

    flex-grow: 1;
  }

  label {
    white-space: nowrap;
  }

  progress {
    height: 32px;
    width: 100%;
    margin: 0 32px;
  }
</style>
