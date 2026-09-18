import AddItemForm from "../../components/AddItemForm/AddItemForm";
import "./AddItem.css";

function AddItem() {
  return (
    <main className="add-item">
      <section className="add-item-intro">
        <h1>Lägg till vara</h1>
        <p>Lägg till en ny vara i ditt skafferi.</p>
      </section>

      <AddItemForm />
    </main>
  );
}

export default AddItem;