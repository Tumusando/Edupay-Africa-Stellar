use soroban_sdk::{contractimpl, contractevent, symbol_short, Env, Address};

#[contractevent]
pub struct PaymentEvent {
    pub student: Address,
    pub amount: i128,
}

pub struct EduPayTuitionContract;

#[contractimpl]
impl EduPayTuitionContract {
    pub fn record_payment(env: Env, student: Address, amount: i128) {
        let topic = symbol_short!("PAYMENT"); 
        env.events().publish((topic,), (student, amount));
    }
}