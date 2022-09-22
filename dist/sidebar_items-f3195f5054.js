sidebarNodes={"extras":[{"group":"","headers":[{"anchor":"modules","id":"Modules"}],"id":"api-reference","title":"API Reference"},{"group":"Guides: Model Creation","headers":[{"anchor":"your-first-model","id":"Your first model"}],"id":"your_first_axon_model","title":"Your first Axon model"},{"group":"Guides: Model Creation","headers":[{"anchor":"creating-a-sequential-model","id":"Creating a sequential model"}],"id":"sequential_models","title":"Sequential models"},{"group":"Guides: Model Creation","headers":[{"anchor":"creating-more-complex-models","id":"Creating more complex models"}],"id":"complex_models","title":"Complex models"},{"group":"Guides: Model Creation","headers":[{"anchor":"creating-multi-input-models","id":"Creating multi-input models"},{"anchor":"creating-multi-output-models","id":"Creating multi-output models"}],"id":"multi_input_multi_output_models","title":"Multi-input / multi-output models"},{"group":"Guides: Model Creation","headers":[{"anchor":"creating-custom-layers","id":"Creating custom layers"}],"id":"custom_layers","title":"Custom layers"},{"group":"Guides: Model Creation","headers":[{"anchor":"creating-models-with-hooks","id":"Creating models with hooks"}],"id":"model_hooks","title":"Model hooks"},{"group":"Guides: Model Execution","headers":[{"anchor":"using-nx-compilers-in-axon","id":"Using Nx Compilers in Axon"},{"anchor":"using-nx-backends-in-axon","id":"Using Nx Backends in Axon"},{"anchor":"a-note-on-cpus-gpus-tpus","id":"A Note on CPUs/GPUs/TPUs"}],"id":"accelerating_axon","title":"Accelerating Axon"},{"group":"Guides: Model Execution","headers":[{"anchor":"executing-models-in-inference-mode","id":"Executing models in inference mode"},{"anchor":"executing-models-in-training-mode","id":"Executing models in training mode"}],"id":"training_and_inference_mode","title":"Training and inference mode"},{"group":"Guides: Training and Evalutaion","headers":[{"anchor":"creating-an-axon-training-loop","id":"Creating an Axon training loop"}],"id":"your_first_training_loop","title":"Your first training loop"},{"group":"Guides: Training and Evalutaion","headers":[{"anchor":"adding-metrics-to-training-loops","id":"Adding metrics to training loops"}],"id":"instrumenting_loops_with_metrics","title":"Instrumenting loops with metrics"},{"group":"Guides: Training and Evalutaion","headers":[{"anchor":"creating-an-axon-evaluation-loop","id":"Creating an Axon evaluation loop"}],"id":"your_first_evaluation_loop","title":"Your first evaluation loop"},{"group":"Guides: Training and Evalutaion","headers":[{"anchor":"adding-event-handlers-to-training-loops","id":"Adding event handlers to training loops"}],"id":"using_loop_event_handlers","title":"Using loop event handlers"},{"group":"Guides: Training and Evalutaion","headers":[{"anchor":"using-custom-models-in-training-loops","id":"Using custom models in training loops"},{"anchor":"using-custom-loss-functions-in-training-loops","id":"Using custom loss functions in training loops"},{"anchor":"using-custom-optimizers-in-training-loops","id":"Using custom optimizers in training loops"}],"id":"custom_models_loss_optimizers","title":"Custom models, loss functions, and optimizers"},{"group":"Guides: Training and Evalutaion","headers":[{"anchor":"writing-custom-metrics","id":"Writing custom metrics"}],"id":"writing_custom_metrics","title":"Writing custom metrics"},{"group":"Guides: Training and Evalutaion","headers":[{"anchor":"writing-custom-event-handlers","id":"Writing custom event handlers"}],"id":"writing_custom_event_handlers","title":"Writing custom event handlers"},{"group":"Guides: Serialization","headers":[{"anchor":"converting-an-onnx-model-into-axon","id":"Converting an ONNX model into Axon"},{"anchor":"onnx-model","id":"ONNX model"},{"anchor":"inference-on-onnx-derived-models","id":"Inference on ONNX derived models"}],"id":"onnx_to_axon","title":"Converting ONNX models to Axon"},{"group":"Examples: Basics","headers":[{"anchor":"introduction","id":"Introduction"},{"anchor":"the-model","id":"The model"},{"anchor":"training-data","id":"Training data"},{"anchor":"training","id":"Training"},{"anchor":"trying-the-model","id":"Trying the model"},{"anchor":"visualizing-the-model-predictions","id":"Visualizing the model predictions"}],"id":"xor","title":"Modeling XOR with a neural network"},{"group":"Examples: Vision","headers":[{"anchor":"introduction","id":"Introduction"},{"anchor":"retrieving-and-exploring-the-dataset","id":"Retrieving and exploring the dataset"},{"anchor":"defining-the-model","id":"Defining the model"},{"anchor":"training","id":"Training"},{"anchor":"prediction","id":"Prediction"}],"id":"mnist","title":"Classifying handwritten digits"},{"group":"Examples: Vision","headers":[{"anchor":"introduction","id":"Introduction"},{"anchor":"loading-the-data","id":"Loading the data"},{"anchor":"a-look-at-the-data","id":"A look at the data"},{"anchor":"data-processing","id":"Data processing"},{"anchor":"building-the-model","id":"Building the model"},{"anchor":"training-the-model","id":"Training the model"},{"anchor":"extra-gradient-centralization","id":"Extra: gradient centralization"},{"anchor":"inference","id":"Inference"}],"id":"horses_or_humans","title":"Classifying horses and humans"},{"group":"Examples: Text","headers":[{"anchor":"introduction","id":"Introduction"},{"anchor":"preparation","id":"Preparation"},{"anchor":"defining-the-model","id":"Defining the Model"},{"anchor":"training-the-network","id":"Training the network"},{"anchor":"generating-text","id":"Generating text"},{"anchor":"multi-lstm-layers","id":"Multi LSTM layers"},{"anchor":"generate-text-with-the-new-network","id":"Generate text with the new network"},{"anchor":"references","id":"References"}],"id":"lstm_generation","title":"Generating text with LSTM"},{"group":"Examples: Structured","headers":[{"anchor":"introduction","id":"Introduction"},{"anchor":"data-processing","id":"Data processing"},{"anchor":"building-the-model","id":"Building the model"},{"anchor":"training-our-model","id":"Training our model"},{"anchor":"model-evaluation","id":"Model evaluation"}],"id":"credit_card_fraud","title":"Classifying fraudulent transactions"},{"group":"Examples: Generative","headers":[{"anchor":"introduction","id":"Introduction"},{"anchor":"downloading-the-data","id":"Downloading the data"},{"anchor":"encoder-and-decoder","id":"Encoder and decoder"},{"anchor":"training-the-model","id":"Training the model"},{"anchor":"extra-losses","id":"Extra: losses"},{"anchor":"inference","id":"Inference"}],"id":"fashionmnist_autoencoder","title":"Training an Autoencoder on Fashion MNIST"}],"modules":[{"group":"","id":"Axon.Initializers","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"full/1","id":"full/1"},{"anchor":"glorot_normal/1","id":"glorot_normal/1"},{"anchor":"glorot_uniform/1","id":"glorot_uniform/1"},{"anchor":"he_normal/1","id":"he_normal/1"},{"anchor":"he_uniform/1","id":"he_uniform/1"},{"anchor":"identity/0","id":"identity/0"},{"anchor":"lecun_normal/1","id":"lecun_normal/1"},{"anchor":"lecun_uniform/1","id":"lecun_uniform/1"},{"anchor":"normal/1","id":"normal/1"},{"anchor":"ones/0","id":"ones/0"},{"anchor":"orthogonal/1","id":"orthogonal/1"},{"anchor":"uniform/1","id":"uniform/1"},{"anchor":"variance_scaling/1","id":"variance_scaling/1"},{"anchor":"zeros/0","id":"zeros/0"}]}],"sections":[],"title":"Axon.Initializers"},{"group":"Model","id":"Axon","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"layers-special","name":"Layers: Special","nodes":[{"anchor":"constant/2","id":"constant/2"},{"anchor":"container/2","id":"container/2"},{"anchor":"input/2","id":"input/2"},{"anchor":"layer/3","id":"layer/3"},{"anchor":"namespace/2","id":"namespace/2"},{"anchor":"nx/3","id":"nx/3"},{"anchor":"optional/2","id":"optional/2"},{"anchor":"param/3","id":"param/3"}]},{"key":"layers-activation","name":"Layers: Activation","nodes":[{"anchor":"activation/3","id":"activation/3"},{"anchor":"celu/2","id":"celu/2"},{"anchor":"elu/2","id":"elu/2"},{"anchor":"exp/2","id":"exp/2"},{"anchor":"gelu/2","id":"gelu/2"},{"anchor":"hard_sigmoid/2","id":"hard_sigmoid/2"},{"anchor":"hard_silu/2","id":"hard_silu/2"},{"anchor":"hard_tanh/2","id":"hard_tanh/2"},{"anchor":"leaky_relu/2","id":"leaky_relu/2"},{"anchor":"linear/2","id":"linear/2"},{"anchor":"log_sigmoid/2","id":"log_sigmoid/2"},{"anchor":"log_softmax/2","id":"log_softmax/2"},{"anchor":"log_sumexp/2","id":"log_sumexp/2"},{"anchor":"mish/2","id":"mish/2"},{"anchor":"relu6/2","id":"relu6/2"},{"anchor":"relu/2","id":"relu/2"},{"anchor":"selu/2","id":"selu/2"},{"anchor":"sigmoid/2","id":"sigmoid/2"},{"anchor":"silu/2","id":"silu/2"},{"anchor":"softmax/2","id":"softmax/2"},{"anchor":"softplus/2","id":"softplus/2"},{"anchor":"softsign/2","id":"softsign/2"},{"anchor":"tanh/2","id":"tanh/2"}]},{"key":"layers-linear","name":"Layers: Linear","nodes":[{"anchor":"bias/2","id":"bias/2"},{"anchor":"bilinear/4","id":"bilinear/4"},{"anchor":"dense/3","id":"dense/3"},{"anchor":"embedding/4","id":"embedding/4"}]},{"key":"layers-convolution","name":"Layers: Convolution","nodes":[{"anchor":"conv/3","id":"conv/3"},{"anchor":"conv_transpose/3","id":"conv_transpose/3"},{"anchor":"depthwise_conv/3","id":"depthwise_conv/3"},{"anchor":"separable_conv2d/3","id":"separable_conv2d/3"},{"anchor":"separable_conv3d/3","id":"separable_conv3d/3"}]},{"key":"layers-dropout","name":"Layers: Dropout","nodes":[{"anchor":"alpha_dropout/2","id":"alpha_dropout/2"},{"anchor":"dropout/2","id":"dropout/2"},{"anchor":"feature_alpha_dropout/2","id":"feature_alpha_dropout/2"},{"anchor":"spatial_dropout/2","id":"spatial_dropout/2"}]},{"key":"layers-pooling","name":"Layers: Pooling","nodes":[{"anchor":"adaptive_avg_pool/2","id":"adaptive_avg_pool/2"},{"anchor":"adaptive_lp_pool/2","id":"adaptive_lp_pool/2"},{"anchor":"adaptive_max_pool/2","id":"adaptive_max_pool/2"},{"anchor":"avg_pool/2","id":"avg_pool/2"},{"anchor":"global_avg_pool/2","id":"global_avg_pool/2"},{"anchor":"global_lp_pool/2","id":"global_lp_pool/2"},{"anchor":"global_max_pool/2","id":"global_max_pool/2"},{"anchor":"lp_pool/2","id":"lp_pool/2"},{"anchor":"max_pool/2","id":"max_pool/2"}]},{"key":"layers-normalization","name":"Layers: Normalization","nodes":[{"anchor":"batch_norm/2","id":"batch_norm/2"},{"anchor":"group_norm/3","id":"group_norm/3"},{"anchor":"instance_norm/2","id":"instance_norm/2"},{"anchor":"layer_norm/2","id":"layer_norm/2"}]},{"key":"layers-recurrent","name":"Layers: Recurrent","nodes":[{"anchor":"conv_lstm/2","id":"conv_lstm/2"},{"anchor":"conv_lstm/3","id":"conv_lstm/3"},{"anchor":"conv_lstm/4","id":"conv_lstm/4"},{"anchor":"gru/2","id":"gru/2"},{"anchor":"gru/3","id":"gru/3"},{"anchor":"gru/4","id":"gru/4"},{"anchor":"lstm/2","id":"lstm/2"},{"anchor":"lstm/3","id":"lstm/3"},{"anchor":"lstm/4","id":"lstm/4"}]},{"key":"layers-combinators","name":"Layers: Combinators","nodes":[{"anchor":"add/3","id":"add/3"},{"anchor":"concatenate/3","id":"concatenate/3"},{"anchor":"cond/5","id":"cond/5"},{"anchor":"multiply/3","id":"multiply/3"},{"anchor":"split/3","id":"split/3"},{"anchor":"subtract/3","id":"subtract/3"}]},{"key":"layers-shape","name":"Layers: Shape","nodes":[{"anchor":"flatten/2","id":"flatten/2"},{"anchor":"pad/4","id":"pad/4"},{"anchor":"reshape/3","id":"reshape/3"},{"anchor":"resize/3","id":"resize/3"},{"anchor":"transpose/3","id":"transpose/3"}]},{"key":"model","name":"Model","nodes":[{"anchor":"build/2","id":"build/2"},{"anchor":"compile/4","id":"compile/4"},{"anchor":"deserialize/2","id":"deserialize/2"},{"anchor":"freeze/2","id":"freeze/2"},{"anchor":"predict/4","id":"predict/4"},{"anchor":"serialize/3","id":"serialize/3"}]},{"key":"model-manipulation","name":"Model: Manipulation","nodes":[{"anchor":"get_inputs/1","id":"get_inputs/1"},{"anchor":"get_op_counts/1","id":"get_op_counts/1"},{"anchor":"get_options/1","id":"get_options/1"},{"anchor":"get_output_shape/3","id":"get_output_shape/3"},{"anchor":"get_parameters/1","id":"get_parameters/1"},{"anchor":"get_parent/1","id":"get_parent/1"},{"anchor":"map_nodes/2","id":"map_nodes/2"},{"anchor":"reduce_nodes/3","id":"reduce_nodes/3"},{"anchor":"set_options/2","id":"set_options/2"},{"anchor":"set_parameters/2","id":"set_parameters/2"},{"anchor":"set_parent/2","id":"set_parent/2"}]},{"key":"model-debugging","name":"Model: Debugging","nodes":[{"anchor":"attach_hook/3","id":"attach_hook/3"},{"anchor":"trace_backward/5","id":"trace_backward/5"},{"anchor":"trace_forward/4","id":"trace_forward/4"},{"anchor":"trace_init/4","id":"trace_init/4"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"input/3","id":"input/3"}]}],"sections":[{"anchor":"module-model-creation","id":"Model Creation"},{"anchor":"module-model-execution","id":"Model Execution"},{"anchor":"module-model-training","id":"Model Training"}],"title":"Axon"},{"group":"Model","id":"Axon.MixedPrecision","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"create_policy/1","id":"create_policy/1"}]}],"sections":[],"title":"Axon.MixedPrecision"},{"group":"Model","id":"Axon.None","sections":[],"title":"Axon.None"},{"group":"Model","id":"Axon.StatefulOutput","sections":[],"title":"Axon.StatefulOutput"},{"group":"Summary","id":"Axon.Display","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"as_graph/3","id":"as_graph/3"},{"anchor":"as_table/2","id":"as_table/2"}]}],"sections":[],"title":"Axon.Display"},{"group":"Functional","id":"Axon.Activations","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"celu/2","id":"celu/2"},{"anchor":"elu/2","id":"elu/2"},{"anchor":"exp/1","id":"exp/1"},{"anchor":"gelu/1","id":"gelu/1"},{"anchor":"hard_sigmoid/2","id":"hard_sigmoid/2"},{"anchor":"hard_silu/2","id":"hard_silu/2"},{"anchor":"hard_tanh/1","id":"hard_tanh/1"},{"anchor":"leaky_relu/2","id":"leaky_relu/2"},{"anchor":"linear/1","id":"linear/1"},{"anchor":"log_sigmoid/1","id":"log_sigmoid/1"},{"anchor":"log_softmax/2","id":"log_softmax/2"},{"anchor":"log_sumexp/2","id":"log_sumexp/2"},{"anchor":"mish/1","id":"mish/1"},{"anchor":"relu6/1","id":"relu6/1"},{"anchor":"relu/1","id":"relu/1"},{"anchor":"selu/2","id":"selu/2"},{"anchor":"sigmoid/1","id":"sigmoid/1"},{"anchor":"silu/1","id":"silu/1"},{"anchor":"softmax/2","id":"softmax/2"},{"anchor":"softplus/1","id":"softplus/1"},{"anchor":"softsign/1","id":"softsign/1"},{"anchor":"tanh/1","id":"tanh/1"}]}],"sections":[],"title":"Axon.Activations"},{"group":"Functional","id":"Axon.Layers","nodeGroups":[{"key":"layers-linear","name":"Layers: Linear","nodes":[{"anchor":"bilinear/5","id":"bilinear/5"},{"anchor":"dense/4","id":"dense/4"},{"anchor":"embedding/3","id":"embedding/3"}]},{"key":"layers-dropout","name":"Layers: Dropout","nodes":[{"anchor":"alpha_dropout/2","id":"alpha_dropout/2"},{"anchor":"dropout/2","id":"dropout/2"},{"anchor":"feature_alpha_dropout/2","id":"feature_alpha_dropout/2"},{"anchor":"spatial_dropout/2","id":"spatial_dropout/2"}]},{"key":"layers-pooling","name":"Layers: Pooling","nodes":[{"anchor":"adaptive_avg_pool/2","id":"adaptive_avg_pool/2"},{"anchor":"adaptive_lp_pool/2","id":"adaptive_lp_pool/2"},{"anchor":"adaptive_max_pool/2","id":"adaptive_max_pool/2"},{"anchor":"avg_pool/2","id":"avg_pool/2"},{"anchor":"global_avg_pool/2","id":"global_avg_pool/2"},{"anchor":"global_lp_pool/2","id":"global_lp_pool/2"},{"anchor":"global_max_pool/2","id":"global_max_pool/2"},{"anchor":"lp_pool/2","id":"lp_pool/2"},{"anchor":"max_pool/2","id":"max_pool/2"}]},{"key":"layers-normalization","name":"Layers: Normalization","nodes":[{"anchor":"batch_norm/6","id":"batch_norm/6"},{"anchor":"group_norm/4","id":"group_norm/4"},{"anchor":"instance_norm/6","id":"instance_norm/6"},{"anchor":"layer_norm/4","id":"layer_norm/4"}]},{"key":"layers-shape","name":"Layers: Shape","nodes":[{"anchor":"flatten/2","id":"flatten/2"},{"anchor":"resize/2","id":"resize/2"}]},{"key":"functions-convolutional","name":"Functions: Convolutional","nodes":[{"anchor":"conv/4","id":"conv/4"},{"anchor":"conv_transpose/4","id":"conv_transpose/4"},{"anchor":"depthwise_conv/4","id":"depthwise_conv/4"},{"anchor":"separable_conv2d/6","id":"separable_conv2d/6"},{"anchor":"separable_conv3d/8","id":"separable_conv3d/8"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"celu/2","id":"celu/2"},{"anchor":"conv_lstm/6","id":"conv_lstm/6"},{"anchor":"conv_lstm_cell/6","id":"conv_lstm_cell/6"},{"anchor":"dynamic_unroll/6","id":"dynamic_unroll/6"},{"anchor":"elu/2","id":"elu/2"},{"anchor":"gru/6","id":"gru/6"},{"anchor":"gru_cell/7","id":"gru_cell/7"},{"anchor":"hard_sigmoid/2","id":"hard_sigmoid/2"},{"anchor":"hard_silu/2","id":"hard_silu/2"},{"anchor":"leaky_relu/2","id":"leaky_relu/2"},{"anchor":"log_softmax/2","id":"log_softmax/2"},{"anchor":"log_sumexp/2","id":"log_sumexp/2"},{"anchor":"lstm/6","id":"lstm/6"},{"anchor":"lstm_cell/7","id":"lstm_cell/7"},{"anchor":"multiply/2","id":"multiply/2"},{"anchor":"selu/2","id":"selu/2"},{"anchor":"softmax/2","id":"softmax/2"},{"anchor":"static_unroll/6","id":"static_unroll/6"},{"anchor":"subtract/2","id":"subtract/2"}]}],"sections":[],"title":"Axon.Layers"},{"group":"Functional","id":"Axon.Losses","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"binary_cross_entropy/3","id":"binary_cross_entropy/3"},{"anchor":"categorical_cross_entropy/3","id":"categorical_cross_entropy/3"},{"anchor":"categorical_hinge/3","id":"categorical_hinge/3"},{"anchor":"connectionist_temporal_classification/3","id":"connectionist_temporal_classification/3"},{"anchor":"cosine_similarity/3","id":"cosine_similarity/3"},{"anchor":"hinge/3","id":"hinge/3"},{"anchor":"kl_divergence/3","id":"kl_divergence/3"},{"anchor":"log_cosh/3","id":"log_cosh/3"},{"anchor":"margin_ranking/3","id":"margin_ranking/3"},{"anchor":"mean_absolute_error/3","id":"mean_absolute_error/3"},{"anchor":"mean_squared_error/3","id":"mean_squared_error/3"},{"anchor":"poisson/3","id":"poisson/3"},{"anchor":"soft_margin/3","id":"soft_margin/3"}]}],"sections":[],"title":"Axon.Losses"},{"group":"Functional","id":"Axon.Metrics","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"accuracy/2","id":"accuracy/2"},{"anchor":"false_negatives/3","id":"false_negatives/3"},{"anchor":"false_positives/3","id":"false_positives/3"},{"anchor":"mean_absolute_error/2","id":"mean_absolute_error/2"},{"anchor":"precision/3","id":"precision/3"},{"anchor":"recall/3","id":"recall/3"},{"anchor":"running_average/1","id":"running_average/1"},{"anchor":"running_sum/1","id":"running_sum/1"},{"anchor":"sensitivity/3","id":"sensitivity/3"},{"anchor":"specificity/3","id":"specificity/3"},{"anchor":"top_k_categorical_accuracy/3","id":"top_k_categorical_accuracy/3"},{"anchor":"true_negatives/3","id":"true_negatives/3"},{"anchor":"true_positives/3","id":"true_positives/3"}]}],"sections":[],"title":"Axon.Metrics"},{"group":"Optimization","id":"Axon.Optimizers","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"adabelief/2","id":"adabelief/2"},{"anchor":"adagrad/2","id":"adagrad/2"},{"anchor":"adam/2","id":"adam/2"},{"anchor":"adamw/2","id":"adamw/2"},{"anchor":"lamb/2","id":"lamb/2"},{"anchor":"noisy_sgd/2","id":"noisy_sgd/2"},{"anchor":"radam/2","id":"radam/2"},{"anchor":"rmsprop/2","id":"rmsprop/2"},{"anchor":"sgd/2","id":"sgd/2"},{"anchor":"yogi/2","id":"yogi/2"}]}],"sections":[{"anchor":"module-example","id":"Example"}],"title":"Axon.Optimizers"},{"group":"Optimization","id":"Axon.Schedules","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"constant/1","id":"constant/1"},{"anchor":"cosine_decay/1","id":"cosine_decay/1"},{"anchor":"exponential_decay/1","id":"exponential_decay/1"},{"anchor":"polynomial_decay/1","id":"polynomial_decay/1"}]}],"sections":[],"title":"Axon.Schedules"},{"group":"Optimization","id":"Axon.Updates","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"add_decayed_weights/1","id":"add_decayed_weights/1"},{"anchor":"add_decayed_weights/2","id":"add_decayed_weights/2"},{"anchor":"add_noise/1","id":"add_noise/1"},{"anchor":"add_noise/2","id":"add_noise/2"},{"anchor":"apply_updates/3","id":"apply_updates/3"},{"anchor":"centralize/1","id":"centralize/1"},{"anchor":"centralize/2","id":"centralize/2"},{"anchor":"clip/1","id":"clip/1"},{"anchor":"clip/2","id":"clip/2"},{"anchor":"clip_by_global_norm/1","id":"clip_by_global_norm/1"},{"anchor":"clip_by_global_norm/2","id":"clip_by_global_norm/2"},{"anchor":"compose/2","id":"compose/2"},{"anchor":"identity/0","id":"identity/0"},{"anchor":"identity/1","id":"identity/1"},{"anchor":"scale/2","id":"scale/2"},{"anchor":"scale_by_adam/1","id":"scale_by_adam/1"},{"anchor":"scale_by_adam/2","id":"scale_by_adam/2"},{"anchor":"scale_by_belief/1","id":"scale_by_belief/1"},{"anchor":"scale_by_belief/2","id":"scale_by_belief/2"},{"anchor":"scale_by_radam/1","id":"scale_by_radam/1"},{"anchor":"scale_by_radam/2","id":"scale_by_radam/2"},{"anchor":"scale_by_rms/1","id":"scale_by_rms/1"},{"anchor":"scale_by_rms/2","id":"scale_by_rms/2"},{"anchor":"scale_by_rss/1","id":"scale_by_rss/1"},{"anchor":"scale_by_rss/2","id":"scale_by_rss/2"},{"anchor":"scale_by_schedule/2","id":"scale_by_schedule/2"},{"anchor":"scale_by_state/1","id":"scale_by_state/1"},{"anchor":"scale_by_state/2","id":"scale_by_state/2"},{"anchor":"scale_by_stddev/1","id":"scale_by_stddev/1"},{"anchor":"scale_by_stddev/2","id":"scale_by_stddev/2"},{"anchor":"scale_by_trust_ratio/1","id":"scale_by_trust_ratio/1"},{"anchor":"scale_by_trust_ratio/2","id":"scale_by_trust_ratio/2"},{"anchor":"scale_by_yogi/1","id":"scale_by_yogi/1"},{"anchor":"scale_by_yogi/2","id":"scale_by_yogi/2"},{"anchor":"stateful/3","id":"stateful/3"},{"anchor":"stateless/2","id":"stateless/2"},{"anchor":"trace/1","id":"trace/1"},{"anchor":"trace/2","id":"trace/2"}]}],"sections":[{"anchor":"module-custom-combinators","id":"Custom combinators"}],"title":"Axon.Updates"},{"group":"Loop","id":"Axon.Loop","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"checkpoint/2","id":"checkpoint/2"},{"anchor":"deserialize_state/2","id":"deserialize_state/2"},{"anchor":"early_stop/3","id":"early_stop/3"},{"anchor":"eval_step/1","id":"eval_step/1"},{"anchor":"evaluator/1","id":"evaluator/1"},{"anchor":"from_state/2","id":"from_state/2"},{"anchor":"handle/4","id":"handle/4"},{"anchor":"log/5","id":"log/5"},{"anchor":"loop/3","id":"loop/3"},{"anchor":"metric/5","id":"metric/5"},{"anchor":"reduce_lr_on_plateau/3","id":"reduce_lr_on_plateau/3"},{"anchor":"run/4","id":"run/4"},{"anchor":"serialize_state/2","id":"serialize_state/2"},{"anchor":"train_step/3","id":"train_step/3"},{"anchor":"trainer/4","id":"trainer/4"},{"anchor":"validate/5","id":"validate/5"}]}],"sections":[{"anchor":"module-initialize-and-step","id":"Initialize and Step"},{"anchor":"module-metrics","id":"Metrics"},{"anchor":"module-events-and-handlers","id":"Events and Handlers"},{"anchor":"module-factories","id":"Factories"},{"anchor":"module-running-loops","id":"Running loops"},{"anchor":"module-resuming-loops","id":"Resuming loops"}],"title":"Axon.Loop"},{"group":"Loop","id":"Axon.Loop.State","sections":[],"title":"Axon.Loop.State"}],"tasks":[]}