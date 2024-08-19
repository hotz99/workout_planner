<script lang="ts">
  import SuperDebug from "sveltekit-superforms";
  import * as Form from "$lib/components/ui/form";
  import * as Select from "$lib/components/ui/select";
  import { Input } from "$lib/components/ui/input";
  import {
    superForm,
    type Infer,
    type SuperValidated,
  } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";
  import { formSchema, type FormSchema } from "./formSchema";

  export let data: SuperValidated<Infer<FormSchema>>;

  const form = superForm(data, {
    validators: zodClient(formSchema),
    dataType: "json",
  });

  const { form: formData, enhance } = form;

  $: selectedSex = $formData.sex ? { value: $formData.sex } : undefined;
</script>

<div class="flex flex-col space-y-4 px-48">
  <div class="text-6xl font-bold pb-4">Energy Expenditure</div>
  <div>
    This tool gives you an <b>estimate</b> of your energy expenditure.
  </div>
  <div>
    <form use:enhance>
      <Form.Field {form} name="age">
        <Form.Control let:attrs>
          <Input
            placeholder="Age"
            type="number"
            {...attrs}
            bind:value={$formData.age}
          />
        </Form.Control>
        <Form.FieldErrors />
      </Form.Field>
      <Form.Field {form} name="sex">
        <Form.Control let:attrs>
          <Select.Root
            selected={selectedSex}
            onSelectedChange={(x) => x && ($formData.sex = x.value)}
          >
            <Select.Trigger {...attrs}>
              <Select.Value placeholder="Sex" />
            </Select.Trigger></Select.Root
          >
          <Select.Content>
            <Select.Item value="male" label="Male" />
            <Select.Item value="female" label="female" />
          </Select.Content>
        </Form.Control>
      </Form.Field>
      <Form.Field {form} name="height">
        <Form.Control let:attrs>
          <Input
            placeholder="Height"
            type="number"
            {...attrs}
            bind:value={$formData.height}
          />
        </Form.Control>
      </Form.Field>
      <Form.Field {form} name="unitSystem">
        <Form.Control let:attrs>
          <Form.Label>Unit System</Form.Label>
          <Select {...attrs} bind:value={$formData.unitSystem}>
            <option value="metric">Metric</option>
            <option value="imperial">Imperial</option>
          </Select>
        </Form.Control>
      </Form.Field>
      <Form.Field {form} name="goal">
        <Form.Control let:attrs>
          <Form.Label>Goal</Form.Label>
          <Select {...attrs} bind:value={$formData.goal}>
            <option value="lose">Lose</option>
            <option value="maintain">Maintain</option>
            <option value="gain">Gain</option>
          </Select>
        </Form.Control>
      </Form.Field>
      <Form.Field {form} name="activityLevel">
        <Form.Control let:attrs>
          <Form.Label>Activity Level</Form.Label>
          <Select {...attrs} bind:value={$formData.activityLevel}>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
            <option value="extreme">Extreme</option>
          </Select>
        </Form.Control>
      </Form.Field>
      <Form.Button>Submit</Form.Button>
    </form>
    <SuperDebug data={$formData} />
  </div>
</div>
